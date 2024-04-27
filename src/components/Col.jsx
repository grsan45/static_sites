import React from "react";

const Col = ({width, centered, children}) => {
    let classNames = `d-flex flex-column col-md${width === undefined ? "" : "-" + width} `
    if (centered)
        classNames += "justify-content-center align-items-center"
    else
        classNames += "justify-content-start align-items-start"

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default Col;
