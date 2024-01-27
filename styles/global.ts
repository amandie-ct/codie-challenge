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
}

html, body, #__next {
    height: 100%;
}


::-webkit-scrollbar {
  width: 10px;  
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
  background: #d8a47a;
  border-radius: 6px;
}
`

export default GlobalStyles
