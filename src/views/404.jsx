import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h4>Oops! Couldn't find that page (404)</h4>
            <Link to="/">Go home</Link>
        </div>
    );
};

export default NotFound;