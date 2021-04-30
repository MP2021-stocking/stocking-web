import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components"

const themeDefault = {
    primary: "rebeccapurple"
}

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.primary};
  }
`;

export const decorators = [
    (Story) => (
        <ThemeProvider theme={themeDefault}>
            <GlobalStyles/>
            <Story/>
        </ThemeProvider>
    ),
];


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}