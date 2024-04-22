import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Home from "../views/Home"
import OGNameGen from "../views/OGNameGen"

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="og_name_gen" element={<OGNameGen />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;