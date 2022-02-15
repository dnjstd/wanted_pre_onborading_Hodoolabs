import type { NextPage } from 'next';
import Head from 'next/head';
import Bookdiary from '../components/bookdiary/Bookdiary';
import CouponPage from '../components/couponpage/CouponPage';
import PeanutSchool from '../components/peanutschool/PeanutSchool';
import ReadBookChallenge from '../components/readbookchallenge/ReadBookChallenge';
import Review from '../components/review/Review';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HodooLabs</title>
        <meta name="description" content="HodooLabs" />
      </Head>

      <Bookdiary />
      <ReadBookChallenge />
      <PeanutSchool />
      <Review />
      <CouponPage />
    </>
  );
};

export default Home;
