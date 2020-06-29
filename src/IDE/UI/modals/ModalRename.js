import React, {useState} from 'react';
import {Button, Form, Message, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {MenuItem} from "react-contextmenu"
import {reloadAsync} from "../../../redux/actions";

const ModalRename = ({clicked, projects, reRender}) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("");
	const [error, setError] = useState(false)
	const dispatch = useDispatch()
	const engine = useSelector(state => state.engine)
	const inputChange = (event, {value}) => {
		setValue(value)
	}

	const renameFile = () => {
		if (clicked.children === undefined) {
			let father = projects.filter(p => p.id === clicked.father)[0]
			for (let child of father.children) {
				if (child.name === value) {
					setError(true)
					return
				}
			}
			let url = `api/projects/${clicked.father}/rename/file/${clicked.name}/${value}`
			fetch(url).then(r => {
				dispatch(reloadAsync())
				reRender(n => !n);
				setError(false)
				setOpen(false)
			})
		} else {
			for (let proj of projects) {
				if (proj.name === value) {
					setError(true)
					return;
				}
			}
			let url = `api/projects/${clicked.id}/rename/${value}`
			fetch(url).then(r => {
				dispatch(reloadAsync())
				reRender(n => !n);
				setOpen(false)
				setError(false)
			})
		}
	}

	return (
		<div>
			<Modal
				open={open}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				size={"large"}
				trigger={
					<MenuItem>Rename</MenuItem>
				}
				basic
			>
				<ModalHeader>Rename</ModalHeader>
				<ModalContent>
					<Form error={error}>
						<Message
							error
							header='Error'
							content='The file already exists'
						/>
						<Form.Input inverted type={"text"} size={"large"} label={"New file name: "}
						            placeholder={"Option"} onChange={inputChange}/>
					</Form>
				</ModalContent>
				<ModalActions>
					<Button inverted onClick={renameFile}>Rename option</Button>
					<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export default ModalRename;