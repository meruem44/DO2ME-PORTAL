import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, #root {
        height: 100vh;
    }

    button, input, * {
        font-family: Lato, sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;