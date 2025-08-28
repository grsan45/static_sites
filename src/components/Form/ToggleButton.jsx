import React from "react";

const ToggleButton = ({name, text, action}) => {
    return (
        <div className="btn-group">
            <input type="checkbox" name={name} className="btn-check" id={name} onChange={action} />
            <label htmlFor={name} className="btn btn-outline-primary" id={name + "Label"}>{text}</label>
        </div>
    );
};

export default ToggleButton;