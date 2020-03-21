import React from "react";
import AceEditor from "react-ace";
import CustomAspMode from "./Asp-Mode";
import "brace/theme/dracula"

const styles = {
    EDITOR: {
        width: "100%",
        height: "100vh"
    }
};

class ASPEditor extends React.Component {

    constructor(props) {
        super(props);
        this.aceEditor = React.createRef();
    }

    componentDidMount(): void {
        this.aceEditor.current.editor.getSession().setMode(new CustomAspMode());
        this.aceEditor.current.editor.setBehavioursEnabled(true);
        this.aceEditor.current.editor.setWrapBehavioursEnabled(true);
    }


    render() {
        return (
            <AceEditor theme="dracula"
                       mode="text"
                       onChange={val => console.log(val)}
                       name="unique"
                       editorProps={{$blockScrolling: true}}
                       ref={this.aceEditor}
                       style={styles.EDITOR}
                       showPrintMargin={false}
            />
        );
    }
}

export default ASPEditor;