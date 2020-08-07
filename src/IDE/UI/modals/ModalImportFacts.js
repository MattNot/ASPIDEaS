import React, {useRef, useState} from 'react';
import {Button, DropdownItem, Icon, Input, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import Papa from "papaparse"
import {useDispatch, useSelector} from "react-redux";
import {editorValue} from "../../../redux/actions";

const ModalImportFacts = () => {
	const [open, setOpen] = useState(false)
	const [inputFile, setInputFile] = useState()
	const [predicateName, setPredicateName] = useState("predicateName")
	const currentEditorValue = useSelector(state => state.editorValue)
	const activeFile = useSelector(state => state.activeFile)
	const dispatch = useDispatch()
	const inputRef = useRef()
	const inputChange = (event, {value}) => {
		setPredicateName(value);
	}
	const onFileChange = e => {
		setInputFile(e.target.files[0])
	}
	// TODO: If we want we can import also from a uri, next feature
	const importFromCSV = () => {
		Papa.parse(inputFile, {
			header: true,
			dynamicTyping: true,
			complete: (results) => {
				let facts = "";
				results.data.forEach(row => {
					facts += `${predicateName}(`
					for (let field in row) {
						if (row.hasOwnProperty(field)) {
							let rowfield = row[field];
							if (typeof rowfield === "string")
								rowfield = "\"" + rowfield + "\"";
							facts += rowfield + ","
						}
					}
					facts += ").\n"
					facts = facts.replace(/,\)\./g, ").");
				})
				dispatch(editorValue(facts + currentEditorValue))
				setOpen(false)
			}
		})
	}
	return (
		<Modal
			open={open}
			dimmer={"blurring"}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			size={"large"}
			trigger={
				<DropdownItem disabled={activeFile.name === undefined}><Icon name={"download"}/>Import facts from
					file</DropdownItem>
			}
			basic
		>
			<ModalHeader>Import from file</ModalHeader>
			<ModalContent>
				<Button as="label" htmlFor="file" type="button" animated="fade" size={"massive"} color={"linkedin"}
				        onClick={() => inputRef.current.click()}>
					<Button.Content visible>
						<Icon name="file"/>
					</Button.Content>
					<Button.Content hidden>Choose File</Button.Content>
				</Button>
				<input hidden type={"file"} ref={inputRef} onChange={onFileChange}/>
				<Input inverted type={"text"} size={"large"} label={"Predicate Name: "}
				       placeholder={"Predicate Name"} onChange={inputChange}/>
			</ModalContent>
			<ModalActions>
				<Button inverted onClick={importFromCSV}>Import</Button>
				<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
			</ModalActions>
		</Modal>
	);
};

export default ModalImportFacts;