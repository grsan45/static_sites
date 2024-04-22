import React from 'react';
import {Link} from "react-router-dom";

import OGNameGen from "./OGNameGen";

const Home = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link to={"/og_name_gen"}>OG Name Gen</Link>
        </div>
    );
};

export default Home;