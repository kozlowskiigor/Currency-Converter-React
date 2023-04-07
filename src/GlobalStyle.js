import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    font-family: 'Lato', sans-serif;
    max-width: 1000px;
    margin: 15px auto;
    text-align: center;
    font-size: 20px;
    background-image: url("https://static.vecteezy.com/system/resources/previews/002/308/996/original/dollar-seamless-pattern-money-dollar-pattern-for-fabric-baby-clothes-background-textile-wrapping-paper-and-other-decoration-illustration-free-vector.jpg");
    background-size: 600px;
    min-height: 100vh;
  };
`;