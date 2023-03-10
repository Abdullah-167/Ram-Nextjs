import React from "react";
import Fade from "react-reveal/Fade";
const AwardsRecognitions = () => {
  return (
    <div className="w-full py-28 relative bg-[#f8fbff]">
      <div className="main-container">
        <Fade bottom>
          <p className="text-[44px]  font-[700] text-dark text-center mb-20">
            Awards & recognitions
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="px-6 py-10 shadow-lg rounded-lg bg-white">
                <div className="flex justify-center mb-6">
                  <img src={item.logo} alt={item.title} className="w-24 h-24 object-contain" />
                </div>
                <h1 className="text-xl font-semibold mb-7 text-center">
                  {item.title}
                </h1>
                <p className="text-base font-normal text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognitions;
const data = [
  {
    title: "Top 10 Mobile App Development Companies",
    description: "IT Rate lists Cubix as top mobile app development companies",
    logo: "/imgs/top-10-mobile-app-development-companies.png",
  },
  {
    title: "Upcity.com names Cubix as a top mobile app company",
    description: "Cubix - a leader in mobile app development",
    logo: "/imgs/cubix-a-leader-in-mobile-app-development1.jpg",
  },
  {
    title: "Cubix among top 8 software development companies",
    description: "Expertise lists Cubix as top software development company",
    logo: "/imgs/best-software-development-flo.png",
  },
  {
    title: "Cubix named among top mobile app development companies",
    description:
      "TopAppFirm listed Cubix in top mobile app development companies",
    logo: "/imgs/top-mobile-app-development-companies-worldwide.png",
  },
  {
    title: "Top iOS app development company in the US",
    description: "Cubix among 30 top iOS app developers in USA 2021",
    logo: "/imgs/top-firms-mobile-app-development-company-badge.jpg",
  },
  {
    title: "Top 10 Mobile App Development Companies",
    description: "IT Rate lists Cubix as top mobile app development companies",
    logo: "/imgs/top-10-mobile-app-development-companies.png",
  },
  {
    title: "Upcity.com names Cubix as a top mobile app company",
    description: "Cubix - a leader in mobile app development",
    logo: "/imgs/cubix-a-leader-in-mobile-app-development1.jpg",
  },
  {
    title: "Cubix among top 8 software development companies",
    description: "Expertise lists Cubix as top software development company",
    logo: "/imgs/best-software-development-flo.png",
  },
  {
    title: "Cubix named among top mobile app development companies",
    description:
      "TopAppFirm listed Cubix in top mobile app development companies",
    logo: "/imgs/top-mobile-app-development-companies-worldwide.png",
  },
  {
    title: "Top iOS app development company in the US",
    description: "Cubix among 30 top iOS app developers in USA 2021",
    logo: "/imgs/top-firms-mobile-app-development-company-badge.jpg",
  },
];
