import '../styles/globals.scss'
import React from "react";
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>myStore</title>
      <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
=======
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://mc.yandex.ru" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&display=swap" rel="stylesheet"/>
>>>>>>> dca501073ad3b75aefab25a7adeb48577a1569f7
      <meta property="og:locale" content="ru_RU" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
