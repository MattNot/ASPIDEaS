import React, {useState} from 'react';
import {
	Button,
	DropdownItem,
	Form,
	Icon,
	Message,
	Modal,
	ModalActions,
	ModalContent,
	ModalHeader
} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";

const ModalNewProject = ({locale, notifyTree}) => {
	const dispatch = useDispatch()
	const projects = useSelector(state => state.projects)
	const [error, setError] = useState(false)
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("");
	const inputChange = (event, {value}) => {
		setValue(value);
	}
	const createProject = () => {
		for (let proj of projects) {
			if (proj.name === value) {
				setError(true)
				return;
			}
		}
		fetch("api/projects/newProject/" + value).then(r => r.text()).then(r => {
			// dispatch(setActiveProject(r));
			notifyTree.setNotifyTree(!notifyTree.notifyTree)
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
				<Form error={error}>
					<Message
						error
						header='Error'
						content='The project already exists'
					/>
					<Form.Input inverted type={"text"} size={"large"} label={locale.__("projName")}
					            placeholder={locale.__("projName")} onChange={inputChange}/>

				</Form>
			</ModalContent>
			<ModalActions>
				<Button inverted onClick={() => createProject()}>Create</Button>
				<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
			</ModalActions>
		</Modal>
	);
}

export default ModalNewProject;