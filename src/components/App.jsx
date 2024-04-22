import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Home from "../views/Home"
import OGNameGen from "../views/OGNameGen"
import GOOSE from "../views/GOOSE";
import ChecklistBuilder from "../views/ChecklistBuilder";
import NotFound from "../views/404";


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />}/>

                    <Route exact path="og_name_gen" element={<OGNameGen />}/>
                    <Route exact path="goose" element={<GOOSE />}/>
                    <Route exact path="checklist_builder" element={<ChecklistBuilder />}/>

                    <Route element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;