import React from 'react';
import PropTypes from "prop-types";
import {MenuItem, SubMenu} from "react-contextmenu";
import SubMenuPrinter from "../editor/SubMenuPrinter";

const ContextMenuHandler = ({errorInLine, handler}) => {
	return (
		<span>
			<MenuItem onClick={handler.copy}>Copy</MenuItem>
			<MenuItem onClick={handler.paste}>Paste</MenuItem>
			<MenuItem onClick={handler.cut}>Cut</MenuItem>
			{errorInLine.value && <SubMenu title={"Fix the error..."} hoverDelay={0.02}>
				<SubMenuPrinter annotation={errorInLine} handler={handler}/>
			</SubMenu>}
		</span>
	);
};

ContextMenuHandler.propTypes = {
	errorInLine: PropTypes.object
};

export default ContextMenuHandler;