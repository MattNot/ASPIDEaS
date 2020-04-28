import React from 'react';
import {MenuItem, SubMenu} from "react-contextmenu";

function SubMenuPrinter({annotation, handler}) {
	return (
		<span>
			{annotation.name === "MissingDot" && <MenuItem onClick={handler._addDot}>Add a dot at the end</MenuItem>}
			{annotation.name === "Safety" && <SubMenu title={"Rewrite..."}>
				<MenuItem onClick={handler.addPositive}>Add a positive member</MenuItem>
				<MenuItem onClick={handler.removeVarInHead}>Remove the unsafe var in head</MenuItem>
			</SubMenu>}
		</span>
	);
}

export default SubMenuPrinter;