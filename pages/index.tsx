import type { NextPage } from 'next';
import Head from 'next/head';
import Bookdiary from '../components/bookdiary/Bookdiary';
import CouponPage from '../components/couponpage/CouponPage';
import PeanutSchool from '../components/peanutschool/PeanutSchool';
import ReadBookChallenge from '../components/readbookchallenge/ReadBookChallenge';
import Review from '../components/review/Review';
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
      <Bookdiary />
      <ReadBookChallenge />
      <PeanutSchool />
      <Review />
      <CouponPage />
    </>
  );
};

export default Home;
