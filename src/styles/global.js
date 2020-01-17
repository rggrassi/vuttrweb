import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    height: 100%;
    background: #ebeaed;
  }

  body, input, button, h1, h2, h3, h4, h5, p, label {
    font-family: 'Source Sans Pro', sans-serif;
  }

  input:focus {
    outline: none;
  }

  body, h1, h2, h3, h4, h5, p, ul {
    padding: 0px;
    margin: 0px;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 0.84px;
    color: #170c3a;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0.72px;
    color: #170c3a;
  }

  h3 {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #170c3a;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.52px;
    color: #170c3a;
  }

  h5 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.48px;
    color: #170c3a;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;