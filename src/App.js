import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Ide from "./IDE/Ide";
import LoginForm from "./Login/Login";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path={"/"}>
						<Link to={"/ide"}>Ide</Link>
						<LoginForm/>
					</Route>
					<Route path={"/ide"}>
						<Ide/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
