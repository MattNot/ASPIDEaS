import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {
	activeFileReducer,
	activeProjectReducer,
	blockReducer,
	changeEditorValueReducer,
	changeLanguageReducer,
	engineReducer,
	execTestsReducer,
	loginReducer,
	modelsNumberReducer,
	outputReducer,
	pluginsReducer,
	projectsReducer
} from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 15}) || compose;

export let store = createStore(combineReducers({
	language: changeLanguageReducer,
	editorValue: changeEditorValueReducer,
	activeFile: activeFileReducer,
	activeProject: activeProjectReducer,
	projects: projectsReducer,
	plugins: pluginsReducer,
	output: outputReducer,
	engine: engineReducer,
	isLogged: loginReducer,
	modelsNumber: modelsNumberReducer,
	execTests: execTestsReducer,
	blocks: blockReducer
}), composeEnhancers(applyMiddleware(thunk)))