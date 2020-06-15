import React, {useState} from 'react';
import {Button, Grid, Icon, MenuItem, Modal} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import antlr4 from "antlr4";
import AceErrorListener from "../editor/parser/AceErrorListener";
import CustomASPCore2_0cListener from "../editor/parser/CustomASPCore2_0cListener";

const Lexer = require("../editor/parser/ASPCore2_0cLexer").ASPCore2_0cLexer;
const Parser = require("../editor/parser/ASPCore2_0cParser").ASPCore2_0cParser;


const TestSenderButton = () => {

	const rules = useSelector(state => state.rules)
	const blocks = useSelector(state => state.blocks)
	const tests = useSelector(state => state.tests)
	const engine = useSelector(state => state.engine)
	const activeProject = useSelector(state => state.activeProject)
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({});
	const explodeExternalFile = (delta, test) => {
		let extBlocks = []
		let extRules = []
		let stream = new antlr4.InputStream(delta);
		let lexer = new Lexer(stream);
		let tokens = new antlr4.CommonTokenStream(lexer);
		let parser = new Parser(tokens);
		let annotations = [];
		let errorListener = new AceErrorListener(annotations);
		parser.removeErrorListeners();
		parser.buildParseTrees = true;
		parser.addErrorListener(errorListener);
		let tree = parser.inizio();
		let walker = new CustomASPCore2_0cListener(annotations, {});
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);
		extBlocks = walker.blocks;
		extRules = walker.rules;
		let tempBlocks = extBlocks.map(block => {
			block.rules = block.rules.map(ruleName => {
				return extRules.filter(rule => rule.name === ruleName).map(r => r.rule);
			})
			block.rules = block.rules.join(" $ ").split("$") //from [[],[]] to []
			return block;
		})
		extRules.forEach(rule => {
			tempBlocks.push({
				name: rule.name,
				rules: [rule.rule]
			})
		});
		let scope = [];
		test.scope.forEach(s => {
			tempBlocks.forEach(block => {
				if (s === block.name) {
					scope.push(block);
				}
			})
		})
		test.inputFiles.forEach(fileName => {
			activeProject.children.forEach(file => {
				if (fileName === file.name) {
					test.input += file.inputProgram;
				}
			})
		})
		test.scope = scope;
	}


	const explodeTest = () => {
		tests.forEach(test => {
			if (test.programFiles.length > 0) {
				test.programFiles.forEach(externalFileName => {
					activeProject.children.forEach(child => {
						if (externalFileName === child.name) {
							explodeExternalFile(child.inputProgram, test)
						}
					})
				})
				console.log(test)
			} else {
				let tempBlocks = blocks.map(block => {
					block.rules = block.rules.map(ruleName => {
						return rules.filter(rule => rule.name === ruleName).map(r => r.rule);
					})
					block.rules = block.rules.join(" $ ").split("$") //from [[],[]] to []
					return block;
				})
				rules.forEach(rule => {
					tempBlocks.push({
						name: rule.name,
						rules: [rule.rule]
					})
				});
				let scope = []
				test.scope.forEach(s => {
					tempBlocks.forEach(block => {
						if (s === block.name) {
							scope.push(block);
						}
					})
				})
				test.inputFiles.forEach(fileName => {
					activeProject.children.forEach(file => {
						if (fileName === file.name) {
							test.input += file.inputProgram;
						}
					})
				})
				test.scope = scope;
			}
		})
		console.log(tests)
	}

	const sendTest = () => {
		explodeTest();
		fetch(`api/test`, {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					testCases: tests,
					options: {
						test: true,
						executor: engine
					}
				})
			}
		).then(r => r.json()).then(t => {
			setOpen(true);
			setData(t);
		});
	}

	const generateTestResult = (x) => {
		let bgColor = "white"
		let listOfChild = []
		if (data[x][1])
			for (let y in data[x][1]) {
				bgColor = "white"
				if (!data[x][1][y])
					bgColor = "yellow"
				listOfChild.push(
					<Grid.Column color={bgColor}>
						{y} : {bgColor === "white" && <Icon name={"check"} color={"green"}/>} {bgColor === "yellow" &&
					<Icon name={"close"} color={"red"}/>}
						<br/>
					</Grid.Column>
				)
			}
		return listOfChild
	}

	const generateModalList = () => {
		let list = [];
		for (let x in data) {
			let color = "white"
			let test = <Grid.Row key={Math.random() + Math.random()} columns={"equal"} color={color}>
				<Grid.Row>{x}</Grid.Row>
				{generateTestResult(x)}
			</Grid.Row>

			list.push(test)
		}
		return list;
	}

	return (
		<Modal
			trigger={<Button as={MenuItem} onClick={sendTest}><Icon name={"bolt"}/></Button>}
			open={open}
			onClose={() => setOpen(false)}>
			<Modal.Header>Test-Cases</Modal.Header>
			<Modal.Content scrolling>
				<Grid>
					{
						generateModalList()
					}
				</Grid>
			</Modal.Content>
		</Modal>
	);
};

export default TestSenderButton;