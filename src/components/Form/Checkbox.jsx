import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({name, action, initialValue}) => {
    const [checked, setChecked] = useState(initialValue || false)
    const doUpdate = (newValue) => {
        setChecked(newValue);
        if (action)
            action(newValue);
    }

    return (
        <div>
            <input type="checkbox" name={name} className="btn-check" id={name} onChange={e => doUpdate(e.target.checked)} checked={checked} />
            <label htmlFor={name} className="btn btn-outline-primary" id={name + "Label"}><FontAwesomeIcon fixedWidth={true} icon={checked ? faCheck : faXmark} /></label>
        </div>
    );
};

export default Checkbox;
