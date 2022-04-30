import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Fira Sans Condensed';
  padding: 20px 40px;

  //anything 800 or below will get these styles
  @media screen and (max-width: 800px) {
    padding: 10px
    
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
