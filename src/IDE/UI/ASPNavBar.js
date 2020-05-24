import React from 'react';
import {Button, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Icon, Menu, MenuItem} from "semantic-ui-react";
import ModalNewProject from "./modals/ModalNewProject";
import ModalNewFile from "./modals/ModalNewFile";
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import ModalImportFacts from "./modals/ModalImportFacts";

const styles = {
	HAMBURGER: {
		background: "transparent",
		padding: "10px",
		height: "33.6px"
	},
	MENU: {
		border: 0,
		borderRadius: 0,
		marginBottom: 0
	}
};


function ASPNavBar(props) {
	const history = useHistory()
	return (
		<Menu inverted style={styles.MENU}>
			<MenuItem>
				<Button onClick={props.toggleMenu} style={styles.HAMBURGER}>
					<Icon name={props.hamburgerName} inverted/>
				</Button>
			</MenuItem>
			<MenuItem as={"a"} header href={"/"}>
				ASP IDEaS
			</MenuItem>
			<Dropdown item simple text={props.locale.__("File")}>
				<DropdownMenu>
					<ModalNewProject locale={props.locale} notifyTree={props.notifyTree}
					                 setActiveProject={props.setActiveProject}/>
					<ModalNewFile locale={props.locale} notifyTree={props.notifyTree}
					              activeProject={props.activeProject}/>
					<Button as={DropdownItem} onClick={props.handleSave}>{props.locale.__("Save")}</Button>
					<DropdownDivider/>
					<ModalImportFacts/>
				</DropdownMenu>
			</Dropdown>
			<Dropdown item simple text={props.locale.__("Edit")}>
				<DropdownMenu>
					<Button as={DropdownItem} onClick={props.setLanguage}>{props.locale.__("changeLang")}</Button>
				</DropdownMenu>
			</Dropdown>
			<Button as={MenuItem} onClick={() => {
				Cookies.remove("logged");
				history.push("/")
			}}>Logout</Button>
			<MenuItem as={Button} onClick={props.sendProgram} position={"right"}><Icon name="play"
			                                                                           color="green"/></MenuItem>
		</Menu>
	);
}

export default ASPNavBar;