import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import jam from "../../../public/imgs/jam.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Fade from "react-reveal/Fade";
const BottomSwiper = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable: "true",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="industries-serve w-full pt-20 pb-10 relative">
      <Fade bottom>
        <h1 className="text-[44px]  font-semibold text-dark  text-center mb-8">
          Industries We Serve
        </h1>
      </Fade>
      <div className=" max-w-6xl mx-auto py-10 relative ">
        <div className="grid grid-cols-4  gap-4">
          {slides.map(({ id, title }) => {
            return (
              <div key={id} className=" services_card  bg-white shadow-card relative cursor-pointer text-center min-h-[100px] flex justify-center items-center transition-all duration-500 hover:-translate-y-4 rounded-md">
                <div>
                  <h1 className="text-dark font-semibold">{title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomSwiper;

const slides = [
  { id: 1, title: "Oil & Gas" },
  { id: 2, title: "Locomotive" },
  { id: 3, title: "Banking" },
  { id: 4, title: "Aerospace" },
  { id: 5, title: "Energy/Utility " },
  { id: 6, title: "E-Commerce " },
  { id: 7, title: "Manufacturing " },
  { id: 8, title: "Defense" },
  { id: 9, title: "Healthcare / Pharma " },
  { id: 10, title: "Entertainment & Media" },
  { id: 11, title: "Technology" },
];

const BtnNext = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-12 h-12  shadow-xl bg-primary text-white rounded-full transition-all duration-300 flex justify-center items-center"
    >
      <GoChevronRight className="w-7 h-7" />
    </button>
  );
};

const BtnPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="w-12 h-12 shadow-xl  bg-primary text-white rounded-full transition-all duration-300 flex justify-center items-center"
    >
      <GoChevronLeft className="w-7 h-7" />
    </button>
  );
};
