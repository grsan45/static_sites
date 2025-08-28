import {useState} from "react";

const TextArea = ({children, onChange, formatter}) => {
    const [content, setContent] = useState(children);
    const [editing, setEditing] = useState(false);

    if (editing) {
        return (
            <textarea className="w-100 form-control bg-dark text-white"
                      onChange={e => setContent(e.target.value)}
                      onBlur={() => {
                          setEditing(false);
                          onChange(content)
                      }}
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