
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

html, body, #root {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.fontFamily.primary};
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
`;
