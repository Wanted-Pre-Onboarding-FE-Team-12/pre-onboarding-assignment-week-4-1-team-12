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
    --textColor: ${props => props.theme.colors.primary1};
    --white: ${props => props.theme.colors.primary8};
    --lightblue: ${props => props.theme.colors.primary5};
    --lightblue2: ${props => props.theme.colors.primary6};
    --darkblue: ${props => props.theme.colors.primary4};
    --neonBlue: ${props => props.theme.colors.neonBlue};
    margin: 0;
    background: var(--bgColor);
    color: var(--textColor);
    font-family: "Noto Sans KR";
  }

  a {
    color: inherit;
    text-decoration: none;
    :focus{
      outline: none;
    }
  }
  a:active,
  a:hover {
    outline: 0;
  }

  ul,
  li{
    list-style:none;
  }
`;
