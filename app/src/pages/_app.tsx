import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default App
