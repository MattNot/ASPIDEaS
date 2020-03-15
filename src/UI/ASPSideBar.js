import React from "react";
import {Sidebar} from "semantic-ui-react";
import ASPFileTree from "./ASPFileTree"

function ASPSideBar({animation, direction, visible}) {
    return (
        <Sidebar
            animation={animation}
            direction={direction}
            icon='labeled'
            inverted={"true"}
            vertical={"true"}
            visible={visible}
            width='wide'
        >
            <ASPFileTree/>
        </Sidebar>
    )
}

export default ASPSideBar;