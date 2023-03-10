import React from "react";

const Process = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex self-center mb-10 md:mb-0">
            <div>
              <h1 className="text-primary text-[22px] uppercase font-medium mb-2">
                RAMSOFT Process
              </h1>
              <h2 className="text-dark text-[32px] leading-[40px] md:text-[44px] md:leading-[50px] font-bold mb-16">
                Let’s chat about eCommerce outsourcing success
              </h2>

              <div className="flex justify-start">
                <div className="buttons">
                  <button className="btn-hover color-5 capitalize">
                    let's get started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/imgs/Helpware-Anton-2.webp"
              alt=""
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
