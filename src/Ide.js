import React, {useState} from 'react';
import ASPSideBar from "./UI/ASPSideBar";
import "semantic-ui-css/semantic.min.css"
import "./App.css"
import {Segment, SidebarPushable, SidebarPusher} from "semantic-ui-react";
import ASPNavBar from "./UI/ASPNavBar";
import locales from "./i18n";
import ASPEditor from "./editor/ASPEditor";
import AspOutput from "./UI/ASPOutput";
import {plugins} from "./plugins";

const styles = {
	MAIN: {height: "100%", width: "100vw", position: "relative"},
	SECONDARY: {margin: "0", padding: "0"},
	PUSHABLE: {margin: 0},
};

function Ide() {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [hamburgerName, setHamburgerName] = useState("close");
	const [sideBarWidth, setSideBarWidth] = useState(350);
	const [language, setLanguage] = useState(locales.it);
	const [editorValue, setEditorValue] = useState("");
	const [outPut, setOutput] = useState("");
	const sendProgram = () => {
		fetch("/evaluateProgram", {
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
		).then(r => r.text()).then(t => setOutput(t));
	}
	const toggleMenu = () => {
		setSidebarVisible(!sidebarVisible);
		setHamburgerName(hamburgerName === "bars" ? "close" : "bars");
		setSideBarWidth(sideBarWidth === 350 ? 0 : 350);
	};
	const handleLanguage = () => {
		//TODO: To extend using indexes perhaps
		if (language === locales.en) {
			setLanguage(locales.it);
		} else {
			setLanguage(locales.en);
		}
	};
	return (
		<div style={styles.MAIN}>
			<ASPNavBar toggleMenu={toggleMenu} hamburgerName={hamburgerName} locale={language}
			           setLanguage={handleLanguage} sendProgram={sendProgram}/>
			<SidebarPushable as={Segment} style={styles.PUSHABLE}>
				<ASPSideBar visible={sidebarVisible} direction={"left"} animation={"push"} width={sideBarWidth}/>
				<SidebarPusher
					style={{transform: `translate3d(${sideBarWidth}px,0,0)`, backgroundColor: "#282a36"}}>
					<ASPEditor plugins={plugins} setFather={setEditorValue}/>
					<AspOutput text={outPut}/>
				</SidebarPusher>
			</SidebarPushable>
		</div>
	);
}

export default Ide;