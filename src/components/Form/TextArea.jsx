import {useState} from "react";

const TextArea = ({children, onChange, formatter}) => {
    const [content, setContent] = useState(children);
    const [editing, setEditing] = useState(false);

    if (editing) {
        return (
            <textarea className="w-100 form-control bg-dark text-white"
                      onBlur={() => setEditing(false)}
                      defaultValue={content}
                      autoFocus/>
        )
    }

    return (
        <div className="w-100 form-control bg-dark text-white" onClick={() => setEditing(true)}>
            {formatter ? formatter(content) : content}
        </div>
    )
}

export default TextArea;