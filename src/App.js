import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Ide from "./IDE/Ide";
import LoginForm from "./Auth/Login";
import Registration from "./Auth/Registration";

function App() {
	return (
		<div>
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
		</div>
	);
}

export default App;
