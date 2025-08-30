import hljs from "highlight.js/lib/core";
import "highlight.js/styles/an-old-hope.min.css"

const CodeBlock = ({children}) => {
    return (
        <pre>
            <code className={"hljs"}>
                <span dangerouslySetInnerHTML={{__html: hljs.highlightAuto(children).value}} />
            </code>
        </pre>
    );
}

export default CodeBlock;