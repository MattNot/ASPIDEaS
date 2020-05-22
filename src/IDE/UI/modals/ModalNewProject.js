import React, {useState} from 'react';
import {Button, DropdownItem, Icon, Input, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {setActiveProject} from "../../../redux/actions/projects";

const ModalNewProject = ({locale, notifyTree}) => {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("");
	const inputChange = (event, {value}) => {
		setValue(value);
	}
	const createProject = () => {
		fetch("api/projects/newProject/" + value).then(r => r.text()).then(r => {
			notifyTree.setNotifyTree(!notifyTree.notifyTree)
			console.log(r)
			dispatch(setActiveProject(r));
		});
		setOpen(false);
	}
	return (
		<Modal
			open={open}
			dimmer={"blurring"}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			size={"large"}
			trigger={
				<DropdownItem><Icon name={"add"}/>{locale.__("newProj")}</DropdownItem>
			}
			basic
		>
			<ModalHeader>{locale.__("newProj")}</ModalHeader>
			<ModalContent>
				<Input inverted type={"text"} size={"large"} label={locale.__("projName")}
				       placeholder={locale.__("projName")} onChange={inputChange}/>
			</ModalContent>
			<ModalActions>
				<Button inverted onClick={() => createProject()}>Create</Button>
				<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
			</ModalActions>
		</Modal>
	);
}

export default ModalNewProject;