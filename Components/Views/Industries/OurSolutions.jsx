import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const OurSolutions = () => {
  const [activetab, setActiveTab] = useState(1);
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <h1 className="text-xl font-bold text-dark mb-5">Your Challenges</h1>
        {data.map((item, index) => {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " key={index}>
              <div className="max-w-lg mb-6">
                <div
                  className={`flex gap-4 relative cursor-pointer px-4  md:px-8 py-5 md:py-7 transition-all duration-500 rounded-lg tab_shadow  ${
                    activetab === item.buttonNumber
                      ? "bg-primary"
                      : "bg-[#F5F5F5]"
                  }`}
                  onClick={() => setActiveTab(item.buttonNumber)}
                >
                  <h1
                    className={`${
                      activetab === item.buttonNumber
                        ? "text-white"
                        : "text-dark "
                    } text-lg md:text-xl font-bold min-w-[10px] md:min-w-[30px]`}
                  >
                    {item.buttonNumber}
                  </h1>
                  <h2
                    className={`${
                      activetab === item.buttonNumber
                        ? "text-white"
                        : "text-dark "
                    } text-sm md:text-lg font-semibold`}
                  >
                    {item.buttonTitle}
                  </h2>
                  <span
                    className={`${
                      activetab === item.buttonNumber
                        ? "text-white"
                        : "text-dark "
                    } md:absolute md:right-6 text-2xl `}
                  >
                    <BsArrowRight />
                  </span>
                </div>
              </div>
              <div>
                <div className="md:absolute md:top-[8%]">
                  {activetab === item.buttonNumber && (
                    <div>
                      <h1 className="text-xl font-bold text-dark mb-5">
                        Our Solutions
                      </h1>
                      <p className="text-base leading-[30px] font-normal text-dark mb-7">
                        {item.description1}
                      </p>
                      <h2 className="text-xl leading-[38px] font-normal text-primary mb-7">
                        {item.description2Title}
                      </h2>
                      <p className="text-base leading-[30px] font-normal text-dark mb-10 md:mb-16">
                        {item.description2}
                      </p>
                      <div className="flex justify-start mb-14 md:mb-0">
                        <div className="buttons">
                          <Link href="/contact-us">
                            <button className="btn-hover color-5">
                              {item.description2Button}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSolutions;

const data = [
  {
    buttonNumber: 1,
    buttonTitle: "Optimized Multi-Channel Digital Experience",
    description1:
      "To continually grow a customer base, eCommerce businesses need to have memorable and user-friendly customer service across all devices where they may start searches and complete buying purchases (desktop/laptops, varying search engines, various social platforms, various mobile devices, and tablets).",
    description2Title: "How Helpware Can Help",
    description2:
      "We provide digital customer service outsourcing to create the needed omnichannel approach to success - no matter where customers choose to search and conduct their purchases. Our multi-platform customer services solutions can complement any existing customer support providing Call Center, Email, Chat, Digital IT, and Technical Outsourcing that help build a strategy to create higher engagement and experience.",
    description2Button: "let's talk",
  },
  {
    buttonNumber: 2,
    buttonTitle: "Consumer Trust in Digital Content",
    description1:
      "To excel in the e-commerce industry, you need consumers to trust your brand. If a form feels dated / insecure, or if they see your information out of appropriate context, they may take their buying journey elsewhere.",
    description2Title: "How Helpware Can Help",
    description2:
      "We provide e-commerce back-office outsourcing to cover all areas needed 24/7. We also deliver AI operations that provide the human intelligence to transform your data through enhanced integrations and tasking. Our technology safeguards ensure customers feel safe and have a good experience with your brand. We complement any existing content control and verification support as an extension of your team providing Image and Video Annotation, Content Moderation, Data Digitization, Categorization, Fraud Prevention, Account Security, and Product Data Quality Assurance.",
    description2Button: "let's talk",
  },
  {
    buttonNumber: 3,
    buttonTitle: "Personalized Buyer Experiences",
    description1:
      "Your customers want to be served the products that fit their individual needs through the platforms they choose. To be successful in eCommerce you need to be able to access, process, analyze, and utilize a large volume of data that allows you to give online shoppers the personalized experience they want.",
    description2Title: "How Helpware Can Help",
    description2:
      "We provide AI Operations outsourcing because we understand it is one of the top investment priorities in eCommerce due to its proven success in increasing the number of customers through personalization.Our AI business process outsourcing provides you the humans in the loop to ensure accurate data from Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).",
    description2Button: "let's talk",
  },
  {
    buttonNumber: 4,
    buttonTitle: "Conversion Rates & Purchase Abandonment",
    description1:
      "There are growing challenges across e-commerce to increase conversions and lower purchasing abandonment, and you need to understand how to close the purchase gaps.",
    description2Title: "How Helpware Can Help",
    description2:
      "We have detailed back-office marketing experts who uncover possible causes, create solutions across digital ads, coupons, email, and test them for success. We complement any existing strategies as an extension of your team providing Strategy, SEO, Social Media, Paid Search Management, Web Development, Design and Video, Email and Lead Gen, and all Back Office Support. We provide culturally aligned and globally supported task execution covering all areas needed to enhance conversions.",
    description2Button: "let's talk",
  },
  {
    buttonNumber: 5,
    buttonTitle: "Acceleration to Market & Outpacing Competition",
    description1:
      "Many retailers are already online offering similar products & services as you. You must find a way to quickly differentiate and out-pace your competition to accelerate growth.",
    description2Title: "How Helpware Can Help",
    description2:
      "We help start-ups quickly and effectively ramp staff and technologies they need without large capital investments. We cover the range of business process outsourcing you need to successfully go to market and ramp your product. We complement any existing front and back-office support as an extension of your team providing Digital Customer Service, Content Control and Verification, AI Operations, Back Office Support, MicroTasking, and Human in the Loop solutions to expedite start-up growth.",
    description2Button: "let's talk",
  },
];
