import React from "react";
import styles from "../../../styles/testimonial.module.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";
import Fade from "react-reveal/Fade";
const Testimonial = () => {
  const slider = React.useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.main}>
        <Fade bottom>
          <p className="text-[44px]  font-[700] text-dark text-center mt-20 ">
            What Our Clients Are Saying
          </p>
        </Fade>
        <div className={styles.main_wrapper}>
          <div className="flex self-center justify-center max-w-[700px] mx-auto">
            <div className="mr-10">
              <img
                className="w-full rounded-md"
                src={"/imgs/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className={styles.content}>
            <h3>OUR GRADUATES ARE GRATEFUL TO US</h3>
            <h1>Feedback from our members</h1>

            <div>
              <Slider ref={(c) => (slider.current = c)} {...settings}>
                <div className={styles.coursel}>
                  <div className={styles.quot_icon}>
                    <a href="#">
                      <ImQuotesRight />
                    </a>
                  </div>
                  <p>
                    Thanks for the intensive. Everything is available,
                    everything is clear. Following ONLY the lessons, you can
                    create a website and even, if desired, a store. The
                    advantage of working with Alex is that you can ask at any
                    stage of the work in those places where it is not clear and
                    difficult. The plus is that the solutions for creating a
                    site are based on modern adaptive themes and when creating a
                    site, it is created immediately for all devices, and not
                    just for a computer.
                  </p>
                  <div className={styles.stars_icon}>
                    <div>
                      <h2>Mike Fisler</h2>
                    </div>
                    <div className="flex gap-x-3">
                      <span>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.coursel}>
                  <div className={styles.quot_icon}>
                    <a href="#">
                      <ImQuotesRight />
                    </a>
                  </div>
                  <p>
                    Thanks for the intensive. Everything is available,
                    everything is clear. Following ONLY the lessons, you can
                    create a website and even, if desired, a store. The
                    advantage of working with Alex is that you can ask at any
                    stage of the work in those places where it is not clear and
                    difficult. The plus is that the solutions for creating a
                    site are based on modern adaptive themes and when creating a
                    site, it is created immediately for all devices, and not
                    just for a computer.
                  </p>
                  <div className={styles.stars_icon}>
                    <div>
                      <h2>Mike Fisler</h2>
                    </div>
                    <div className="flex gap-x-3">
                      <span>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                      <span className={styles.stars}>
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className={styles.slider_btn}>
                <a onClick={previous}>
                  <span>
                    <FaArrowLeft />
                  </span>
                </a>
                <a onClick={next}>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
