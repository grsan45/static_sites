import React, {Children} from "react";

const NavColumn = ({title, children}) => {
    return (
        <div className="col-md-4 d-flex justify-content-start flex-column">
            <ul>
                <h3>{title}</h3>
                {Children.map(children, child =>
                    <li>{child}</li>
                )}
            </ul>
        </div>
    );
};

export default NavColumn;