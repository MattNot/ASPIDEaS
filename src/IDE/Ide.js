import React, {useEffect, useState} from 'react';
import ASPSideBar from "./UI/sidebar/ASPSideBar";
import "semantic-ui-css/semantic.min.css"
import "../App.css"
import {Button, Segment, SidebarPushable, SidebarPusher} from "semantic-ui-react";
import ASPNavBar from "./UI/ASPNavBar";
import locales from "../i18n";
import {default as pl} from "./plugins"
import AspOutput from "./UI/ASPOutput";
import {useDispatch, useSelector} from "react-redux";
import {english, italian, reloadAsync, setPlugins} from "../redux/actions";
import EditorWrapper from "./editor/EditorWrapper";
import Cookies from "js-cookie"

const styles = {
	MAIN: {height: "100%", width: "100vw", position: "relative"},
	SECONDARY: {margin: "0", padding: "0"},
	PUSHABLE: {margin: 0},
};

function Ide() {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [hamburgerName, setHamburgerName] = useState("close");
	const [sideBarWidth, setSideBarWidth] = useState(350);
	const language = useSelector(state => state.language);
	const dispatch = useDispatch();
	const editorValue = useSelector(state => state.editorValue);
	const engine = useSelector(state => state.engine)
	const activeProject = useSelector(state => state.activeProject)
	const activeFile = useSelector(state => state.activeFile)
	const execTests = useSelector(state => state.execTests)
	const modelsNumber = useSelector(state => state.modelsNumber)
	const [outPut, setOutput] = useState("");
	const [notifyTree, setNotifyTree] = useState(false)
	const sendProgram = () => {
		fetch(`api/evaluate`, {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					input: {
						inputProgram: editorValue,
						name: activeFile.name,
						father: activeFile.father
					},
					options: {
						test: false,
						n: modelsNumber,
						executor: engine
					}
				})
			}
		).then(r => r.json()).then(t => {
			t = t.map((f, index) => `MODEL N. ${index + 1} \n` + f)
			setOutput(t.join("\n"))
		});
	}
	const sendTest = () => {
		fetch(`api/test`, {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					testCases: [
						{
							name: "provaTest",
							scope: [
								{
									name: "ProvaBlock",
									rules: [
										"\n a|b.",
										"\n c. :- not a. :- not b. :- not c."
									]
								}
							],
							programFiles: [],
							input: "",
							assertions: [
								{
									"@type": "NoAnswerSets",
								}
							]
						}
					],
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
	const toggleMenu = () => {
		setSidebarVisible(!sidebarVisible);
		setHamburgerName(hamburgerName === "bars" ? "close" : "bars");
		setSideBarWidth(sideBarWidth === 350 ? 0 : 350);
	};
	const handleLanguage = () => {
		//TODO: To extend using indexes perhaps
		if (language === locales.en) {
			dispatch(italian())
		} else {
			dispatch(english())
		}
	};
	const handleSave = () => {
		if (!activeFile || !activeProject)
			return false;
		let children = activeProject.children.map(child => {
			if (child.name === activeFile.name)
				child = activeFile
			return child;
		});
		fetch("api/projects/" + activeProject.id + "/save", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(children)
		}).then(r => dispatch(reloadAsync()))
	}

	useEffect(() => {
		dispatch(setPlugins(pl))
	}, [])
	return (
		<span>
			<Button onClick={sendTest}>Cia</Button>
			{Cookies.get("logged") && <div style={styles.MAIN}>
				<ASPNavBar toggleMenu={toggleMenu} hamburgerName={hamburgerName} locale={language}
				           setLanguage={handleLanguage} sendProgram={sendProgram}
				           notifyTree={{notifyTree, setNotifyTree}} handleSave={handleSave}/>
				<SidebarPushable as={Segment} style={styles.PUSHABLE}>
					<ASPSideBar visible={sidebarVisible} direction={"left"} animation={"push"} width={sideBarWidth}
					            notifyTree={notifyTree}/>
					<SidebarPusher
						style={{transform: `translate3d(${sideBarWidth}px,0,0)`, backgroundColor: "#282a36"}}>
						<EditorWrapper handleSave={handleSave}/>
						<AspOutput text={outPut}/>
					</SidebarPusher>
				</SidebarPushable>
			</div>}
			{!Cookies.get("logged") && <div>
				You must log-in
			</div>}
		</span>
	);
}

export default Ide;
