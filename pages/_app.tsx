import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>hodoo labs</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
