import React from 'react';
import {Link} from "react-router-dom";
import View from "../components/View"

const Home = () => {
    return (
         <View>
             <h1>Hello World!</h1>
             <Link to={"/og_name_gen"}>OG Name Generator</Link>
         </View>
    );
};

export default Home;