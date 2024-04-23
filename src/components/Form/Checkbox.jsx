import React from "react";

const Checkbox = ({name, text}) => {
    return (
        <div className="btn-group">
            <input type="checkbox" name={name} className="btn-check" id={name} />
            <label htmlFor={name} className="btn btn-outline-primary" id={name + "Label"}>{text}</label>
        </div>
    );
};

export default Checkbox;