import React from 'react';
import {Button, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Icon, Menu, MenuItem} from "semantic-ui-react";
import ModalNewProject from "./modals/ModalNewProject";
import ModalNewFile from "./modals/ModalNewFile";
import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"
import ModalImportFacts from "./modals/ModalImportFacts";
import TestSenderButton from "./TestSenderButton";
import {engine} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import ModalOption from "./modals/ModalOption";

const styles = {
	HAMBURGER: {
		background: "transparent",
		padding: "10px",
		height: "33.6px"
	},
	MENU: {
		position: "relative",
		border: 0,
		borderRadius: 0,
		marginBottom: 0
	}
};


const executors = [
	{key: "dlv2", text: "DLV 2.0", value: "dlv2"},
	{key: "cling", text: "Clingo", value: "clingo"}
];

const dropdownStyle = {
	borderRadius: "4px",
	paddingLeft: "10px",
	paddingRight: "10px",
	marginLeft: 0
};


function ASPNavBar(props) {
	const history = useHistory()
	const executor = useSelector(state => state.engine)
	const activeProject = useSelector(state => state.activeProject)
	const dispatch = useDispatch()
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
					<Button as={DropdownItem} onClick={props.handleSave}
					        disabled={activeProject.name === undefined}><Icon
						name={"save"}/> {props.locale.__("Save")}
					</Button>
					<DropdownDivider/>
					<ModalImportFacts/>
				</DropdownMenu>
			</Dropdown>
			<Dropdown item simple text={props.locale.__("Edit")}>
				<DropdownMenu>
					<Button as={DropdownItem} onClick={props.setLanguage}>{props.locale.__("changeLang")}</Button>
					<DropdownDivider/>
					<ModalOption/>
				</DropdownMenu>
			</Dropdown>

			<Dropdown style={dropdownStyle}
			          options={executors} item simple defaultValue={"dlv2"} labeled
			          onChange={(e, {value}) => dispatch(engine(value))}/>

			<Button as={MenuItem} onClick={() => {
				Cookies.remove("logged");
				history.push("/")
				clearInterval(window.inter)
			}}>Logout</Button>
			<MenuItem as={Button} onClick={props.sendProgram} position={"right"}><Icon name="play"
			                                                                           color="green"/></MenuItem>

			<TestSenderButton/>
		</Menu>
	);
}

export default ASPNavBar;