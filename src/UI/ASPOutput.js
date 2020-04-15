import React from 'react';
import {Form, TextArea} from "semantic-ui-react";

const styles = {
	textArea: {
		backgroundColor: "#282a36",
		color: "white",
		minHeight: "16vh",
		maxHeight: "20vh",
		border: "1px dashed grey"
	},
};


const AspOutput = (props) => {
	return (
		<Form inverted>
			<TextArea placeholder='Output: ' style={styles.textArea}>
				{props.text || ""}
			</TextArea>
		</Form>
	);
};

export default AspOutput;