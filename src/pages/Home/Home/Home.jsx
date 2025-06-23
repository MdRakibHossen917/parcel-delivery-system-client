import React from 'react';
import Banner from '../Banner/Banner';
import Services from './services/services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benifits from './Benifits/Benifits';
import BeMerchent from '../BeMerchent/BeMerchent';
import HowItWorks from '../HowItWorks/HowItWorks';
import Reviews from './Reviews/Reviews';
import FAQ from './FAQ/FAQ';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <Services></Services>
           <ClientLogosMarquee></ClientLogosMarquee>
           <Benifits></Benifits>
           <BeMerchent></BeMerchent>
           <Reviews></Reviews>
           <FAQ></FAQ>
           
        </div>
    );
};

export default Home;