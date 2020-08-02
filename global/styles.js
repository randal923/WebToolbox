import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
		Helvetica Neue, sans-serif;
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased !important;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --body-color: #e6e6e6;
        --text-gray: #6a6a6a;
        --light-gray: #fafafa;
        --gray: #696969;
        --back: black;
        --button-blue: #1983ff;
        --button-red: red;
        --text-blue: #0070f3;
        --border: #eaeaea;
        --light-black: #111111;
    }

`;
