import React from 'react';
import {Link} from "react-router-dom";
import View from "../components/View"
import NavColumn from "../components/Nav/NavColumn";
import Col from "../components/Col";

const Home = () => {
    return (
         <View>
             <NavColumn title="Projects">
                 <Link className="main-nav-link" to="goose">GOOSE (Grayson's Odd Operating System Endeavour)</Link>
                 <Link className="main-nav-link" to="ntm">NoTrackingMarkers</Link>
             </NavColumn>
             <NavColumn title="Utilities & Fun Things">
                 <Link className="main-nav-link" to="og_name_gen">"OG" name generator</Link>
                 <Link className="main-nav-link" to="checklist_builder">Rocketry Checklist Builder (WIP)</Link>
             </NavColumn>
         </View>
    );
};

export default Home;