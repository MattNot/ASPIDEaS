import React from 'react';
import {Checkbox, Dropdown, Grid, Input, Label} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {changeExecTest, engine, setModels} from "../../../redux/actions";

const executors = [
	{key: "dlv2", text: "DLV 2.0", value: "dlv2"},
	{key: "cling", text: "Clingo", value: "clingo"}
];

const dropdownStyle = {
	backgroundColor: "white",
	borderRadius: "4px",
	paddingLeft: "10px",
	paddingRight: "10px",
	marginLeft: 0
};


const OptionsPanel = () => {
	const dispatch = useDispatch();
	return (
		<Grid columns={"equal"} inverted padded style={{backgroundColor: "#21252B"}}>
			<Grid.Row centered>
				<Label pointing={"right"}>Executors</Label>
				<Dropdown style={dropdownStyle}
				          options={executors} item simple defaultValue={"dlv2"} labeled
				          onChange={(e, {value}) => dispatch(engine(value))}/>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Input type={"number"} label={"Number of models"} min={"0"} defaultValue={1}
					       onChange={(e, {value}) => dispatch(setModels(value))}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Label>Exec. Tests</Label>
				<Checkbox style={{paddingTop: "5px"}} onChange={(e, {value}) => dispatch(changeExecTest())}/>
			</Grid.Row>
			<Grid.Row>

			</Grid.Row>
		</Grid>
	);
};

export default OptionsPanel;