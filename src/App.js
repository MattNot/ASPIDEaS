import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Ide from "./IDE/Ide";
import LoginForm from "./Auth/Login";
import Registration from "./Auth/Registration";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {changeLanguageReducer} from "./redux/reducers/changeLanguageReducer";
import {changeEditorValueReducer} from "./redux/reducers/editorValueReducer";
import {activeFileCombiner} from "./redux/reducers/activeFileCombiner";
import {activeProjectCombiner} from "./redux/reducers/activeProjectCombiner";
import {projectsCombiner} from "./redux/reducers/projectsCombiner";
import {pluginsCombiner} from "./redux/reducers/pluginsCombiner";

let store = createStore(combineReducers({
	language: changeLanguageReducer,
	editorValue: changeEditorValueReducer,
	activeFile: activeFileCombiner,
	activeProject: activeProjectCombiner,
	projects: projectsCombiner,
	plugins: pluginsCombiner
}))

function App() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path={"/"}>
							<LoginForm/>
						</Route>
						<Route path={"/ide"}>
							<Ide/>
						</Route>
						<Route path={"/register"}>
							<Registration/>
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
