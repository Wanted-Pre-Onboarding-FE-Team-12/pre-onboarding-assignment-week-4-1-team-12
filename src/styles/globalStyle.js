import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }

  body {
    --bgColor: ${props => props.theme.colors.primary7};
    margin: 0;
    background: var(--bgColor);
    color: var(--textColor);
    font-family: "Noto Sans KR";
  }

  article,
  footer,
  header,
  main,
  nav {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .2s;
    :focus{
      outline: none;
    }
  }
  a:active,
  a:hover {
    outline: 0;
  }

  ul{
    list-style:none;
  }
`;
