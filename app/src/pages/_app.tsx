import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { AppPropsWithLayout } from '@/components/types/Layout.type'
import Container from '@/components/containers/Container'
import DefaultSEO from '@/components/seos/DefaultSeo'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(
        <Container>
          <DefaultSEO />
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </Container>,
      )}
    </Provider>
  )
}

export default App
