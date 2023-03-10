import React from "react";
import BottomSwiper from "../Home/BottomSwiper";
import OurServices from "../Home/OurServices";
import Industries from "./Industries";
import IndustryChallenges from "./IndustryChallenges";
import OurSolutions from "./OurSolutions";
import Process from "./Process";
import WhyUs from "./WhyUs";

const Index = () => {
  return (
    <div>
      <Industries />
      <IndustryChallenges />
      <OurSolutions />
      <WhyUs />
      <OurServices />
      <BottomSwiper />
      <Process />
    </div>
  );
};

export default Index;
