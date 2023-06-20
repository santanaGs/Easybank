import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    // Typography
    --light: 300;
    --regular: 400;
    --bold: 700;
    --font-family: 'Public Sans', sans-serif;

    // Color
    --dark-blue:  hsl(233, 26%, 24%);
    --lime-green: hsl(136, 65%, 51%);
    --cyan: hsl(192, 70%, 51%);

    //Neutral
    --grayish-blue: hsl(233, 8%, 62%);
    --gight-grayish-blue: hsl(220, 16%, 96%);
    --very-light-gray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
}

`