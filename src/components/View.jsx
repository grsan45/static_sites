import React from "react";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.css'

const View = ({children}) => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
                <a className="navbar-brand" id="title" href="/">Grayson's <em>things</em></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navlinks">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-auto" id="navlinks">
                    <ul className="navbar-nav align-self-end">
                        <li className="nav-item active"><a href="https://github.com/grsan45"
                                                           className="nav-link">Github</a></li>
                        <li className="nav-item active"><a href="https://twitter.com/grsan69"
                                                           className="nav-link">Twitter</a></li>
                        <li className="nav-item active"><a href="https://www.youtube.com/@grsan45"
                                                           className="nav-link">Youtube</a></li>
                    </ul>
                </div>
            </nav>
            <hr/>

            <div className="row gy-5">{children}</div>

            <div className="container-fluid fixed-bottom opacity-75">
                <p>This website and all projects, unless otherwise stated, are licensed under GNU-GPLv3</p>
            </div>
        </div>
    );
};

export default View;