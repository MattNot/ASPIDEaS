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
import {useSelector} from "react-redux";

const ModalNewFile = ({locale, notifyTree}) => {
	const activeProject = useSelector(state => state.activeProject)
	const [open, setOpen] = useState(false)
	const [error, setError] = useState(false)
	const [value, setValue] = useState("");
	const inputChange = (event, {value}) => {
		setValue(value);
	}
	const createFile = () => {
		for (let child of activeProject.children) {
			if (child.name === value) {
				setError(true)
				return
			}
		}
		fetch("api/projects/" + activeProject.id + "/newFile/" + value).then(r => r.text()).then(r => notifyTree.setNotifyTree(!notifyTree.notifyTree));
		setOpen(false);
		setError(false)
	}
	return (
		<Modal
			open={open}
			dimmer={"blurring"}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			size={"large"}
			trigger={
				<DropdownItem disabled={activeProject.name === undefined}><Icon name={"add"}/>{locale.__("newfile")}
				</DropdownItem>
			}
			basic
		>
			<ModalHeader>{locale.__("newFile")}</ModalHeader>
			<ModalContent>
				<Form error={error}>
					<Message
						error
						header='Error'
						content='The file already exists'
					/>
					<Form.Input inverted type={"text"} size={"large"} label={locale.__("projName")}
					            placeholder={locale.__("projName")} onChange={inputChange}/>
				</Form>

			</ModalContent>
			<ModalActions>
				<Button inverted onClick={() => createFile()}>Create</Button>
				<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
			</ModalActions>
		</Modal>
	);
};

export default ModalNewFile;