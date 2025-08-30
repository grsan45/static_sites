import {css} from "@emotion/css";

const PageHeader = ({text, logoUrl}) => {
    return (
        <h1 className={css`
            display: flex;
            &:before {
                flex-basis: 1.2em;
                content: "";
                background-image: url("${logoUrl}");
                background-size: 1.2em;
                margin-right: 0.5rem;
            }
        `}>
            {text}
        </h1>
    )
}

export default PageHeader;