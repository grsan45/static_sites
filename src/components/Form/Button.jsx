import React from "react";

const Button = ({name, text, action, style}) => {
    return (
        <button onClick={action} className="btn btn-outline-primary" id={name} style={style}>{text}</button>
    );
};

export default Button;