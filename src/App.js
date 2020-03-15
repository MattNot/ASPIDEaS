import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ASPEditor from "./editor/ASPEditor";
import ASPSideBar from "./UI/ASPSideBar";
import 'semantic-ui-css/semantic.min.css'
import {Segment, SidebarPushable, SidebarPusher} from "semantic-ui-react";
import ASPNavBar from "./UI/ASPNavBar";

const styles = {
    MAIN: {height: "100vh", width: "100vw"},
    SECONDARY: {margin: "0", padding: "0"},
    PUSHABLE: {margin: 0}
};

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [hamburgerName, setHamburgerName] = useState("close");
    const toggleMenu = () => {
        setSidebarVisible(!sidebarVisible);
        setHamburgerName(hamburgerName === "bars" ? "close" : "bars");
    };
    return (
        <div style={styles.MAIN}>
            <ASPNavBar toggleMenu={toggleMenu} hamburgerName={hamburgerName}/>
            <SidebarPushable as={Segment} style={styles.PUSHABLE}>
                <ASPSideBar visible={sidebarVisible} direction={"left"} animation={"push"}/>
                <SidebarPusher>
                    <Segment basic style={styles.SECONDARY}>
                        <ASPEditor/>
                    </Segment>
                </SidebarPusher>
            </SidebarPushable>
        </div>
    );
}

export default App;
