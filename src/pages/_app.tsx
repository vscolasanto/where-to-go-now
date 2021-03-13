import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Where to Go - Pra onde ir em sua próxima viagem ?</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />

        <meta
          name="description"
          content="A simple project to suggest where to go when you want to travel"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
