import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Cookies from "js-cookie"
import Ide from "./IDE/Ide";
import LoginForm from "./Auth/Login";
import Registration from "./Auth/Registration";
import {Provider} from "react-redux";
import {store} from "./redux";
import {setLastKeyboardEvent} from "./redux/actions";

window.onkeydown = ev => {
	if (ev.ctrlKey) {
		store.dispatch(setLastKeyboardEvent(true))
	}
}
window.onkeyup = ev => {
	if (!ev.ctrlKey) {
		store.dispatch(setLastKeyboardEvent(false))
	}
}

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
