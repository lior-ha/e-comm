import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-family-main: 'Open Sans Condensed', sans-serif;
    }
    BODY {
        font-family: var(--font-family-main);
        padding: 20px 40px;

        @media only screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    A {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`