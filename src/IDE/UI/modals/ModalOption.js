import React, {useState} from 'react';
import {Button, DropdownItem, Icon, Input, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";

const ModalOption = () => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("");
	const inputChange = (event, {value}) => {
		setValue(value);
	}
	return (
		<div>
			<Modal
				open={open}
				dimmer={"blurring"}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				size={"large"}
				trigger={
					<DropdownItem><Icon name={"terminal"}/>Executor's options</DropdownItem>
				}
				basic
			>
				<ModalHeader>Command line options</ModalHeader>
				<ModalContent>
					<Input inverted type={"text"} size={"large"} label={"Predicate Name: "}
					       placeholder={"Option"} onChange={inputChange}/>
				</ModalContent>
				<ModalActions>
					<Button inverted onClick={importFromCSV}>Submit new option</Button>
					<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
				</ModalActions>
			</Modal>
		</div>
	);
};

export default ModalOption;