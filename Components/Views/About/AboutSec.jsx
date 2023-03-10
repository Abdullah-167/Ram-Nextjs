import React from "react";
import Fade from "react-reveal/Fade";
const AboutSec = () => {
  return (
    <div className="w-full py-20">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Fade>
            <div className="flex self-center">
              <img src="/imgs/about-main-mg.jpeg" alt="" />
            </div>
          </Fade>
          <Fade>
            <div className="text-dark font-normal text-base flex self-center flex-col">
              <p>
                Incorporated in 1993, Ramsoft Systems, Inc. (RSI) began with a
                vision to deliver high quality, cost effective IT & Staffing
                Solutions to clients across the United States. Over the past two
                and a half decades, RSI has been providing efficient and
                innovative Staff Augmentation, Consulting, and End-to-End
                Project Solutions to our clients.
              </p>
              <p>
                Today, RSI has grown to cater to clients in virtually every
                major industry including; have strong industry experience in
                Automotive, Aerospace, Retail/Distribution, Entertainment &
                Media, Energy, Defense, Healthcare/Pharma, E-Commerce,
                Technology, Banking, Manufacturing, Government (Federal, State
                and Local), and others. We have placed exceptional people across
                the United States in all roles & positions, and have provided
                high quality solutions to our clients all over the world.
              </p>
              <p>We are a certified Minority Business Enterprise.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
