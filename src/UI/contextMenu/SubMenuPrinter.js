import React from 'react';
import {MenuItem} from "react-contextmenu";

function SubMenuPrinter({annotation, handler, errorMenu = true}) {
	return (
		<span>
			{errorMenu &&
			<MenuItem onClick={handler[annotation.name]}>{}</MenuItem>
			}
		</span>
	);
}

export default SubMenuPrinter;


/*

{handler.plugins.map(plugin => {
	return <MenuItem onClick={plugin.function} key={plugin.name}
	                 data={{editor: handler.aceEditor.current.editor}}> {plugin.description} </MenuItem>
})}*/
