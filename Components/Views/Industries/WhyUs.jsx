import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-primary text-[22px] text-center mb-4 font-medium">
          Why Us?
        </h1>
        <h2 className="text-dark text-center max-w-3xl mx-auto text-[28px] leading-[38px] md:text-[44px] md:leading-[60px] font-bold mb-16">
          Because We Deliver Customer Moments that Matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => {
            return (
              <div key={index} className={`${item.color} px-6 py-10 rounded-xl transition-all duration-300 shadow-md`}>
                <h1 className="text-white font-bold text-[28px] pb-6">{item.title}</h1>
                <p className="text-white font-medium text-base leading-[28px]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

const data = [
  {
    color: "colorA",
    title: "People",
    description:
      "Spreading smiles since we started. Our culture brings experts who know how to address urgent demands and bring joy to each interaction.",
  },
  {
    color: "colorB",
    title: "Performance",
    description:
      "Driving up to 80% savings in operational and capital costs while enhancing customer experience. Our results mindset brings creative solutions to challenges.",
  },
  {
    color: "colorC",
    title: "Precision",
    description:
      "Building unified, consistent processes and procedures using the latest technology. We bring accuracy to results through algorithms, analytics, and architecture.",
  },
  {
    color: "colorD",
    title: "Productivity",
    description:
      "Accelerating adaptability to expedite growth in a fast-moving industry. Our ability to bring needed experts around the globe drives economies of scale.",
  },
  {
    color: "colorE",
    title: "Protection",
    description:
      "Delivering enhanced compliance, regulatory focus, and security measures. We reduce potential threats to your process.",
  },
  {
    color: "colorF",
    title: "Promise",
    description:
      "Increasing customer trust through our loyal team. We stand behind our team and their work to drive your success.",
  },
];
