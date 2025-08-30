import React from "react";
import {Route, HashRouter as Router, Routes} from 'react-router-dom'

import Home from "../views/Home"
import OGNameGen from "../views/OGNameGen"
import GOOSE from "../views/GOOSE";
import ChecklistBuilder from "../views/ChecklistBuilder";
import NoMatch from "../views/NoMatch";
import NTM from "../views/NTM";

import hljs from "highlight.js/lib/core"
import json from "highlight.js/lib/languages/json"


const App = () => {
    // Registering hljs languages. As if I've actually done bundle optimization anyway.
    hljs.registerLanguage("json", json);

    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />}/>

                    <Route exact path="og_name_gen" element={<OGNameGen />}/>
                    <Route exact path="goose" element={<GOOSE />}/>
                    <Route exact path="ntm" element={<NTM />}/>
                    <Route exact path="checklist_builder" element={<ChecklistBuilder />}/>

                    <Route path="*" element={<NoMatch status={404} />}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;