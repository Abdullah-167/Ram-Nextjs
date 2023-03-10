import { useEffect, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import header1 from "../../../public/imgs/header1.jpg";
import header2 from "../../../public/imgs/header2.jpg";
import header3 from "../../../public/imgs/header3.jpg";
import header4 from "../../../public/imgs/header4.jpg";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const Header = () => {
  // swiper functionality

  const [currentIndex, updateCurrentIndex] = useState(0);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const swiperRef = useRef(null);

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable: "true",
    },
  };

  // const goNext = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //     updateIndex();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };
  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );
  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex, swiperRef]);
  return (
    <div className=" w-full header ">
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        loop={`true`}
        {...params}
        ref={swiperRef}
        modules={[EffectCoverflow]}
        effect="coverflow"
      >
        {slides.map(({ id, img, desc, subtitle, title, btn }) => {
          return (
            <SwiperSlide key={id}>
              <div className=" w-full relative  flex flex-col">
                <div className="relative z-0 overlay h-[93vh]">
                  <Image objectFit="cover" layout="fill" src={img} alt="img" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-10 m-auto p-4 sm:p-6  md:p-8  flex justify-center items-center">
                  <div className="max-w-[900px] flex flex-col items-center text-center">
                    <Fade bottom>
                      <h3 className="  text-white font-bold text-[50px] leading-[60px] uppercase mb-6">
                        {title}
                      </h3>
                    </Fade>
                    <Fade bottom>
                      <h2 className="text-white text-[20px] font-normal mb-14">
                        {subtitle}
                      </h2>
                    </Fade>
                    <Fade bottom>
                      <div className="buttons">
                        <Link href="/contact-us">
                          <button className="btn-hover color-5 capitalize">
                            {btn}
                          </button>
                        </Link>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Header;

const slides = [
  {
    id: 1,
    img: header1,
    title: "expertise & experience",
    subtitle:
      "25 years of experience providing nationwide Staff Augmentation, Consulting, and End-to-End Project Solutions for our Fortune 500, mid, and small size clients. ",
    btn: "contact us now",
  },
  {
    id: 2,
    img: header2,
    title: "24 X 7 Optimized Recruiting and Delivery Process ",
    subtitle: "The Right Resources at The Right Price at the Right Time ",
    btn: "Give it a Try",
  },
  {
    id: 3,
    img: header3,
    title: "Multifaceted ",
    subtitle: "STAFF AUGMENTATION Services",
    btn: "contact us now",
  },
  {
    id: 4,
    img: header4,
    title: "RECRUITMENT PROCESS OUTSOURCING  ",
    subtitle: "Cutting Your Time-to-Hire in Half ",
    btn: "GIVE IT A TRY!",
  },
  {
    id: 5,
    img: header2,
    title: "BUSINESS PROCESS OUTSOURCING ",
    subtitle: "Meet your specific requirement needs ",
    btn: "GIVE IT A TRY!",
  },
  {
    id: 6,
    img: header4,
    title: "PAYROLL SERVICES",
    subtitle: "Get the payroll solutions that best fits your needs ",
    btn: "GIVE IT A TRY!",
  },
];
