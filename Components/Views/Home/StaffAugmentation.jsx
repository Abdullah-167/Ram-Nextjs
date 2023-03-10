import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BsLightbulb, BsSliders } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const StaffAugmentation = () => {
  return (
    <div className="w-full pt-10 pb-20">
      <div className="main-container">
        <Fade bottom>
          <h1 className="text-[44px] font-[700]  text-dark  text-center mb-16">
            Our Products
          </h1>
        </Fade>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="services_card relative cursor-pointer shadow-card  px-6 pt-10 pb-24 transition-all duration-500 hover:-translate-y-7 rounded-xl">
            <div
              className={`colorA  flex justify-center shadow-xl items-center services_icon   text-white w-16 h-16 rounded-full mb-8`}
            >
              <span className="text-[30px]">
                <BiMessageSquareEdit />
              </span>
            </div>
            <h3 className="text-dark text-xl font-bold mt-4 mb-4">
              STAFF AUGMENTATION
            </h3>
            <p className="text-base font-normal text-dark">
              RSI is a Full-Service Staffing provider helping clients hire TOP
              talent on Contract, Contract-to-hire and Direct Hire across the
              United States. Positions:
            </p>

            <ul className="text-sm mt-4 flex flex-col gap-1 text-gray   ">
              <li className="list-item list-inside list-disc pb-2">IT</li>
              <li className="list-item list-inside list-disc pb-2">
                Engineering
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Professional
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Finance &amp; Accounting
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Technical
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Scientific/Healthcare
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Administrative &amp; Clerical
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Light Industrial
              </li>
            </ul>
          </div>

          <div className="services_card relative cursor-pointer shadow-card  px-6 pt-10 pb-24 transition-all duration-500 hover:-translate-y-7 rounded-xl">
            <div
              className={`colorB  flex justify-center shadow-xl items-center services_icon   text-white w-16 h-16 rounded-full mb-8`}
            >
              <span className="text-[30px]">
                <AiOutlineSetting />
              </span>
            </div>
            <h3 className="text-dark text-xl font-bold mt-4 mb-4">
              PAYROLL SERVICES
            </h3>
            <p className="text-base font-normal text-dark">
              We help clients in managing the payroll of their contract
              employees, reducing their overhead cost, and helping them
              streamline their administrative processes.
            </p>

            <ul className="text-sm mt-4 flex flex-col gap-1 text-gray ">
              <li className="list-item list-inside list-disc pb-2">
                Direct & Indirect Cost Savings
              </li>
              <li className="list-item list-inside list-disc pb-2">
                W2 Filing
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Benefit Administration
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Data Security
              </li>
              <li className="list-item list-inside list-disc pb-2">
                Compliance
              </li>
            </ul>
          </div>

          <div className="services_card relative cursor-pointer shadow-card  px-6 pt-10 pb-24 transition-all duration-500 hover:-translate-y-7 rounded-xl">
            <div
              className={`colorE  flex justify-center shadow-xl items-center services_icon   text-white w-16 h-16 rounded-full mb-8`}
            >
              <span className="text-[30px]">
                <BsLightbulb />
              </span>
            </div>
            <h3 className="text-dark text-xl font-bold mt-4 mb-4">
              RECRUITMENT PROCESS OUTSOURCING (RPO)
            </h3>
            <p className="text-base font-normal text-dark">
              RSI provides end-to-end RPO services to its clients. RSI’s RPO
              allows small to large businesses to source & hire best talent in
              no time. Whether you need limited recruitment support or the
              complete recruitment solution. We deliver what you need.
            </p>
          </div>

          <div className="services_card relative cursor-pointer shadow-card  px-6 pt-10 pb-24 transition-all duration-500 hover:-translate-y-7 rounded-xl">
            <div
              className={`colorD  flex justify-center shadow-xl items-center services_icon   text-white w-16 h-16 rounded-full mb-8`}
            >
              <span className="text-[30px]">
                <BsSliders />
              </span>
            </div>
            <h3 className="text-dark text-xl font-bold mt-4 mb-4">
              BUSINESS PROCESS OUTSOURCING (BPO)
            </h3>
            <p className="text-base font-normal text-dark">
              RSI is a best-in-class BPO service provider, offering a wide range
              of services for clients spanning different industries. Using RSI
              BPO services has allowed our clients to increase proficiency and
              productivity and optimize utility while reducing cost, business
              risk, and time to market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentation;
