import React, {useEffect, useState} from 'react';
import ASPSideBar from "./UI/ASPSideBar";
import "semantic-ui-css/semantic.min.css"
import "../App.css"
import {Segment, SidebarPushable, SidebarPusher} from "semantic-ui-react";
import ASPNavBar from "./UI/ASPNavBar";
import locales from "../i18n";
import {default as pl} from "./plugins"
import AspOutput from "./UI/ASPOutput";
import {useDispatch, useSelector} from "react-redux";
import {english, italian, setPlugins} from "../redux/actions";
import EditorWrapper from "./editor/EditorWrapper";

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
	const [outPut, setOutput] = useState("");
	const [notifyTree, setNotifyTree] = useState(false)
	const sendProgram = () => {
		fetch(`api/${engine}/evaluateProgram`, {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					inputProgram: editorValue,
					testCases: ["a.", "b."]
				})
			}
		).then(r => r.json()).then(t => {
			let out = t.map(a => a.answerSet);
			setOutput(out.join("\n"))
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
	useEffect(() => {
		dispatch(setPlugins(pl))
	}, [])
	return (
		<div style={styles.MAIN}>
			<ASPNavBar toggleMenu={toggleMenu} hamburgerName={hamburgerName} locale={language}
			           setLanguage={handleLanguage} sendProgram={sendProgram} notifyTree={{notifyTree, setNotifyTree}}/>
			<SidebarPushable as={Segment} style={styles.PUSHABLE}>
				<ASPSideBar visible={sidebarVisible} direction={"left"} animation={"push"} width={sideBarWidth}
				            notifyTree={notifyTree}/>
				<SidebarPusher style={{transform: `translate3d(${sideBarWidth}px,0,0)`, backgroundColor: "#282a36"}}>
					<EditorWrapper/>
					<AspOutput text={outPut}/>
				</SidebarPusher>
			</SidebarPushable>
		</div>
	);
}

export default Ide;
