import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import LiveBookClass from '../components/LiveBookClaas';
import SelectedBook from '../components/SelectedBook';
import OnAirClass from '../components/OnAirClass';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HodooLabs</title>
        <meta name="description" content="HodooLabs" />
      </Head>
      <Main />
      <About />
      <LiveBookClass />
      <SelectedBook />
      <OnAirClass />
    </>
  );
};

export default Home;
