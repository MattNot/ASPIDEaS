import React from "react";
import {Sidebar} from "semantic-ui-react";
import ASPFileTree from "./ASPFileTree"

function ASPSideBar({animation, direction, visible, width, notifyTree}) {

	return (
		<Sidebar
			animation={animation}
			direction={direction}
			icon='labeled'
			inverted={"true"}
			vertical={"true"}
			visible={visible}
			width='wide'
			style={{width: `${width}px`}}
		>
			<ASPFileTree notifyTree={notifyTree}/>
		</Sidebar>
	)
}

export default ASPSideBar;