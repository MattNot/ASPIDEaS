import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ASPEditor from "./editor/ASPEditor";
import ASPNavBar from "./Navbar";

function App() {
    return (
        <div className="App">
            <ASPNavBar/>
            <div>
                <ASPEditor/>
            </div>
        </div>
    );
}
export default App;
