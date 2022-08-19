import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    h1, a, div, p, header, section, article, input, textarea {
        box-sizing: border-box;
    }

    ol, ul, li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        font-size: inherit;
        border: none;
        background-color: white;
    }

    button {
        cursor: pointer;
    }

    .ir {
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
