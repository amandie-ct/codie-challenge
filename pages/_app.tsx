import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import  GlobalStyles from '../styles/global'
import Theme from '../styles/theme'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
  </ThemeProvider>
}
