import '../styles/globals.css'
import type { AppInitialProps, AppProps } from 'next/app'
import { wrapper } from 'redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { NextPageContext } from 'next/types';
import { AppContextType } from 'next/dist/shared/lib/utils';

interface MyAppProps extends AppProps {
  store: any
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, store } = props
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={store.__persistor}>
        <Component {...pageProps} />

    //   </PersistGate>
    // </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContextType) => {
  console.log("component", await Component.getInitialProps?.(ctx))
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return { pageProps }
}

export default wrapper.withRedux(MyApp)
