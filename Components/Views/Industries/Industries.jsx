import React from "react";

const Industries = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex self-center mb-10 md:mb-0">
            <div>
              <h1 className="text-primary text-[22px] font-medium">Industry</h1>
              <h2 className="text-dark text-[32px] leading-[40px] md:text-[54px] md:leading-[60px] font-bold mb-6">
                eCommerce & Retail
              </h2>
              <p className="text-dark text-lg font-normal mb-16">
                You want to meet your customers where they are with a
                personalized journey that creates brand ambassadors. We go
                beyond eCommerce customer service, tools, and digital technology
                and bring the culture that increases your buyer community.
              </p>
              <div className="flex justify-start">
                <div className="buttons">
                  <button className="btn-hover color-5 capitalize">
                    Increase Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/imgs/industry-ecommerce-hero.webp"
              alt=""
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
