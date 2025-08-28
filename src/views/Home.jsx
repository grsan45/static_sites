import React from 'react';
import {Link} from "react-router-dom";
import View from "../components/View"
import NavColumn from "../components/Nav/NavColumn";

const Home = () => {
    return (
         <View>
             <NavColumn title="Projects">
                 <Link to="goose">GOOSE (Grayson's Odd Operating System Endeavour)</Link>
             </NavColumn>
             <NavColumn title="Utilities & Fun Things">
                 <Link to="og_name_gen">"OG" name generator</Link>
                 <Link to="checklist_builder">Rocketry Checklist Builder (WIP)</Link>
             </NavColumn>
         </View>
    );
};

export default Home;