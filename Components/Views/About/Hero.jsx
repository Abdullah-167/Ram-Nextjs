import Link from "next/link";
import React from "react";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <div className="w-full mx-auto about_bg">
      <div className="main-container">
        <div className="py-24">
          <Fade buttom>
            <h1 className="text-5xl font-bold text-white mb-10">About Us</h1>
          </Fade>
          <Fade buttom>
            <p className="max-w-[600px] text-lg font-normal text-white leading-8">
              Ramsoft is a RSI founded company with a world-class team of
              talented data scientists, developers, designers, mathematicians,
              engineers, and creative artists. We are motivated to build elegant
              and functional digital products that solve complex problems.
            </p>
          </Fade>
          <Fade buttom>
            <Link href="/contact-us">
              <button className="text-white border-2 px-10 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl capitalize mt-10">
                Give it a Try
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
