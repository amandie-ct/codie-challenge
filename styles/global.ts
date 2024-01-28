'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 'Inter', sans-serif;
}

body {
  background-color: ${({ theme }) => theme.colors.white};
  font-family: 'Inter', sans-serif;
}

html, body, #__next {
    height: 100%;
}
`

export default GlobalStyles
