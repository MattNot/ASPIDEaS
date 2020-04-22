import React from 'react';
import PropTypes from "prop-types";
import {MenuItem, SubMenu} from "react-contextmenu";

const ContextMenuHandler = props => {
	return (
		<span>
			<MenuItem onClick={props.functions.copy}>Copy</MenuItem>
			<MenuItem onClick={props.functions.paste}>Paste</MenuItem>
			<MenuItem onClick={props.functions.cut}>Cut</MenuItem>
			{props.errorInLine.value && <SubMenu title={"Fix the error..."}>
				{props.errorInLine.name === "MissingDot" &&
				<MenuItem onClick={props.functions.addDot}>Add a dot at the end</MenuItem>}
			</SubMenu>}
		</span>
	);
};

ContextMenuHandler.propTypes = {
	errorInLine: PropTypes.object
};

export default ContextMenuHandler;