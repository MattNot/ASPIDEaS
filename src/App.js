import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Cookies from "js-cookie"
import Ide from "./IDE/Ide";
import LoginForm from "./Auth/Login";
import Registration from "./Auth/Registration";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {
	activeFileReducer,
	activeProjectReducer,
	changeEditorValueReducer,
	changeLanguageReducer,
	engineReducer,
	outputReducer,
	pluginsReducer,
	projectsReducer
} from "./redux/reducers";
import thunk from "redux-thunk";
import {loginReducer} from "./redux/reducers/loginReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 15}) || compose;

let store = createStore(combineReducers({
	language: changeLanguageReducer,
	editorValue: changeEditorValueReducer,
	activeFile: activeFileReducer,
	activeProject: activeProjectReducer,
	projects: projectsReducer,
	plugins: pluginsReducer,
	output: outputReducer,
	engine: engineReducer,
	isLogged: loginReducer
}), composeEnhancers(applyMiddleware(thunk)))

function App() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path={"/"}>
							{!Cookies.get("logged") && <LoginForm/>}
							{Cookies.get("logged") && <Redirect to={"/ide"}/>}
						</Route>
						<Route path={"/register"}>
							<Registration/>
						</Route>
						<Route path={"/ide"}>
							<Ide/>
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
