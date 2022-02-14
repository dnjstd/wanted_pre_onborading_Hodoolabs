import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>hodoo labs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
