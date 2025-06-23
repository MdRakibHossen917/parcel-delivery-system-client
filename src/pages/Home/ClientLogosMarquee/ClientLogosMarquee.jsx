import React from "react";
import Marquee from "react-fast-marquee";

// import your logos
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start from "../../../assets/brands/start.png";
import people from "../../../assets/brands/start-people 1.png";
import randstad from "../../../assets/brands/randstad.png";


const logos = [amazon, casio, moonstar, people, start, randstad];

const ClientLogosMarquee = () => {
  return (
    <section
      className="py-10 bg-gray-100"
      aria-label="Trusted client logos marquee"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-primary font-bold text-center mb-12">
          Trusted by Leading Brands
        </h2>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 lg:mx-24 flex items-center"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-6 md:h-10 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
