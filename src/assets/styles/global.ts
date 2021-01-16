import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --color-black-primary: #212727;
    --color-blue-primary: #00AAD4;
    --color-blue-secundary: #CCFFF9;
    --color-green-primary: #0ADE34;
    --color-white-primary: #FFFFFF;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-black-primary);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
  }

  button {
    cursor: pointer;
  }
`;
