import React from 'react';
import FloatCover from '../../components/FloatCover/FloatCover';
import GiftBoxes from '../../components/GiftBoxes/GiftBoxes';
import Stories from '../../components/Storiess/Stories';
import AboutUs from '../../components/AboutUs/AboutUs';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <>
      <FloatCover />
      <GiftBoxes />
      <Stories />
      <AboutUs />
    </>
  );
};

export default Home;
