import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: #312E38;
    color: #F4EDE8;
    font-family: Roboto Slab;
  }
  button, input{
    outline:none;
  }

`;
