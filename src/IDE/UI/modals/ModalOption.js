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
import {addOption, removeOption} from "../../../redux/actions";

const ModalOption = () => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("");
	const [error, setError] = useState(false)
	const [, reRenderMe] = useState(false)
	const cliOptions = useSelector(state => state.cliOptions)
	const dispatch = useDispatch()
	const engine = useSelector(state => state.engine)
	const inputChange = (event, {value}) => {
		setValue(value);
	}

	const addCliOption = () => {
		let url = new URL(window.location.origin + "/option")
		const params = {
			option: value,
			engine
		}
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
		fetch(url).then(r => r.json()).then(value1 => {
			if (value1) {
				dispatch(addOption(params.option))
				setError(false)
			} else
				setError(true)
			reRenderMe(n => !n);
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
				<DropdownItem><Icon name={"terminal"}/>Executor's
					options</DropdownItem>
			}
			basic
		>
			<ModalHeader>Command line options</ModalHeader>
			<ModalContent>
				Actual active options:
				<ol>
					{
						cliOptions.map((option, index) => {
							return <span key={index}>
								<li>
									{option}
									<Icon name={"times circle"} refer={option} inverted
									      onClick={(e, target) => dispatch(removeOption(target.refer))}/>
								</li>
							</span>
						})
					}
				</ol>
				<Form error={error}>
					<Message
						error
						header='Error'
						content='This option is not supported by the selected executor'
					/>
					<Form.Input inverted type={"text"} size={"large"} label={"Predicate Name: "}
					            placeholder={"Option"} onChange={inputChange}/>
				</Form>
			</ModalContent>
			<ModalActions>
				<Button inverted onClick={addCliOption}>Submit new option</Button>
				<Button inverted onClick={() => setOpen(false)}>Cancel</Button>
			</ModalActions>
		</Modal>
	);
};

export default ModalOption;