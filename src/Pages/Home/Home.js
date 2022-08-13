import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Qualification from './Qualification';
import Work from './Work';

const Home = () => {
      return (
            <div>
    
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Qualification></Qualification>
            </div>
      );
};

export default Home;