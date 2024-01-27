import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import  GlobalStyles from '../styles/global'
import Theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
  </ThemeProvider>
}
