import React from "react";
import Banner from "../Banner/Banner";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import HowItWorks from "../HowItWorks/HowItWorks";
import Reviews from "./Reviews/Reviews";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>

      <ClientLogosMarquee></ClientLogosMarquee>

      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
