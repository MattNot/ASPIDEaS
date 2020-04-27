import React from 'react';
import PropTypes from "prop-types";
import {MenuItem, SubMenu} from "react-contextmenu";

const ContextMenuHandler = ({errorInLine, handler}) => {
	return (
		<span>
			<MenuItem onClick={handler.copy}>Copy</MenuItem>
			<MenuItem onClick={handler.paste}>Paste</MenuItem>
			<MenuItem onClick={handler.cut}>Cut</MenuItem>
			{errorInLine.value && <SubMenu title={"Fix the error..."}>
				{errorInLine.name === "MissingDot" &&
				<MenuItem onClick={handler.addDot}>Add a dot at the end</MenuItem>}
			</SubMenu>}
		</span>
	);
};

ContextMenuHandler.propTypes = {
	errorInLine: PropTypes.object
};

export default ContextMenuHandler;