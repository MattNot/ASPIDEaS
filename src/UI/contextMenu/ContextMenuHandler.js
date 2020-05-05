import React from 'react';
import PropTypes from "prop-types";
import {MenuItem, SubMenu} from "react-contextmenu";

const ContextMenuHandler = ({errorInLine, handler, context}) => {
	return (
		<span>
			<MenuItem onClick={handler.copy}>Copy</MenuItem>
			<MenuItem onClick={handler.paste}>Paste</MenuItem>
			<MenuItem onClick={handler.cut}>Cut</MenuItem>
			{errorInLine.value && <SubMenu title={"Fix the error..."} hoverDelay={0.02}>
				{handler.plugins.map(plugin => {
					return plugin.type === "error" && plugin.errorName === errorInLine.name &&
						<MenuItem onClick={plugin.function} key={plugin.name} data={{
							editor: handler.aceEditor.current,
							lineContext: context,
							errorInLine: errorInLine
						}}>{plugin.description}</MenuItem>
				})}
			</SubMenu>}
			{handler.plugins.length > 0 &&
			<SubMenu title={"Apply plugin..."} hoverDelay={0.02}>
				{handler.plugins.map(plugin => {
					return plugin.type === "simple" && <MenuItem onClick={plugin.function} key={plugin.name} data={{
						editor: handler.aceEditor.current,
						lineContext: context
					}}>{plugin.description}</MenuItem>
				})}
			</SubMenu>

			}
		</span>
	);
};

ContextMenuHandler.propTypes = {
	errorInLine: PropTypes.object
};

export default ContextMenuHandler;