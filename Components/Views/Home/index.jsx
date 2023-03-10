import AwardsRecognitions from "./AwardsRecognitions";
import BottomSwiper from "./BottomSwiper";
import Header from "./Header";
import MeetOurServices from "./MeetOurServices";
import OurServices from "./OurServices";
import StaffAugmentation from "./StaffAugmentation";
import Testimonial from "./Testimonials";

const HomeIndex = () => {
  return (
    <>
      <Header />
      <MeetOurServices button={true} />
      <OurServices />
      <StaffAugmentation />
      <BottomSwiper />
      <AwardsRecognitions />
      <Testimonial />
    </>
  );
};

export default HomeIndex;
