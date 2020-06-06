import React from 'react';
import {Button, Icon, MenuItem} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";

const TestSenderButton = () => {

	const rules = useSelector(state => state.rules)
	const blocks = useSelector(state => state.blocks)
	const tests = useSelector(state => state.tests)
	const engine = useSelector(state => state.engine)
	const dispatch = useDispatch();
	const sendTest = () => {
		let tempBlocks = blocks.map(block => {
			block.rules = block.rules.map(ruleName => {
				return rules.filter(rule => rule.name === ruleName).map(r => r.rule);
			})
			block.rules = block.rules.join(" $ ").split("$")
			return block;
		})
		rules.forEach(rule => {
			tempBlocks.push({
				name: rule.name,
				rules: [rule.rule]
			})
		});
		tests.forEach(test => {
			let scope = []
			test.scope.forEach(s => {
				tempBlocks.forEach(block => {
					if (s === block.name) {
						scope.push(block);
					}
				})
			})
			test.scope = scope;
		});
		console.log(tests)
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
			console.log(t)
		});
	}
	return (
		<Button as={MenuItem} onClick={sendTest}>
			<Icon name={"bolt"}/>
		</Button>
	);
};

export default TestSenderButton;