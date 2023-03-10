import React from "react";
import MeetOurServices from "../Home/MeetOurServices";
import OurServices from "./OurServices";

const Index = () => {
  return (
    <div>
      <MeetOurServices button={false}/>
      <OurServices />
    </div>
  );
};

export default Index;
