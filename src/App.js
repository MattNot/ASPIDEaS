import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ASPEditor from "./editor/ASPEditor";
import ASPSideBar from "./UI/ASPSideBar";
import 'semantic-ui-css/semantic.min.css'
import {Segment, SidebarPushable, SidebarPusher} from "semantic-ui-react";
import ASPNavBar from "./UI/ASPNavBar";

const styles = {
    MAIN: {height: "100vh", width: "100vw", position: "relative"},
    SECONDARY: {margin: "0", padding: "0"},
    PUSHABLE: {margin: 0}
};


function App() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [hamburgerName, setHamburgerName] = useState("close");
    const [sideBarWidth, setSideBarWidth] = useState(350);
    const toggleMenu = () => {
        setSidebarVisible(!sidebarVisible);
        setHamburgerName(hamburgerName === "bars" ? "close" : "bars");
        setSideBarWidth(sideBarWidth === 350 ? 0 : 350);
    };
    return (
        <div style={styles.MAIN}>
            <ASPNavBar toggleMenu={toggleMenu} hamburgerName={hamburgerName}/>
            <SidebarPushable as={Segment} style={styles.PUSHABLE}>
                <ASPSideBar visible={sidebarVisible} direction={"left"} animation={"push"} width={sideBarWidth}/>
                <SidebarPusher style={{transform: `translate3d(${sideBarWidth}px,0,0)`}}>
                    <Segment basic style={styles.SECONDARY}>
                        <ASPEditor/>
                    </Segment>
                </SidebarPusher>
            </SidebarPushable>
        </div>
    );
}

export default App;
