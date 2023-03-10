import React from "react";

const IndustryChallenges = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-primary text-[22px] text-center mb-4 font-medium">
          INDUSTRY CHALLENGES
        </h1>
        <h2 className="text-dark text-center max-w-3xl mx-auto text-[28px] leading-[38px] md:text-[44px] md:leading-[60px] font-bold mb-16">
          What’s top of mind for leaders in the retail industry?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src="/imgs/ecommerce1.webp"
              alt=""
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex self-center">
            <div>
              <p className="text-dark text-lg font-normal mb-6">
                Demand for online shopping solutions continues to grow digital
                transformation continues to advance at a record pace customers
                continue to look for product quality and speed customer
                satisfaction continues to drive competitive advantage
              </p>
              <p className="text-dark text-lg font-normal mb-6">
                As retailers, you know how important it is to stay ahead of the
                eCommerce game. Working with Helpware provides you with
                personalized eCommerce customer service solutions to support the
                fast-paced world of customized buyer journeys.
              </p>
              <p className="text-dark text-lg font-normal mb-6">
                We provide the right humans in the loop to transform and
                integrate this journey. Regardless of task type or interaction —
                by empowering the absolute best in “people as a service” we are
                that critical human connection within your loop of technology,
                communication, and services to support your customers along
                their journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryChallenges;
