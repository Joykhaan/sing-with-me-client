import React from 'react';
import Banner from '../Banner/Banner';
import Biosection from '../Biosection/Biosection';
import TotalTraffic from '../TotalTraffic/TotalTraffic';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Biosection></Biosection>
            <TotalTraffic></TotalTraffic>
            
            
        </div>
    );
};

export default Home;