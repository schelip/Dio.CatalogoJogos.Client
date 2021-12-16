import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #191A19;
        --dark-green: #1E5128;
        --green: #4E9F3D;
        --light-green: #D8E9A8;
        --dark-blue: #082032;
        --dark-gray-blue: #2C394B;
        --gray-blue: #334756;
        --orange: #FF4C29;
    }

    body {
        margin: 0;
        background-color: white;
    }
`;
