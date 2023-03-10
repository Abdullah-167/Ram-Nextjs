import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { BsMap, BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-32 bg-[#262626] ">
      <div className="max-w-[1218px] px-5 w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <Link href={`/`}>
              <a>
                <Image
                  width={180}
                  height={44}
                  src={`/imgs/logo-ramsoft.png`}
                  alt="logo"
                />
              </a>
            </Link>

            <p className="mt-[10px] mb-10 text-sm text-white">
              We are a fast growing, fun loving team of creative thinkers and
              passionate collaborators.
            </p>

            <div className="flex gap-2 items-center">
              {icons.map(({ id, icon, path }) => {
                return (
                  <a href={path} key={id}>
                    <span className="text-[28px] text-white"> {icon}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {pages.map(({ id, title, links }) => {
            return (
              <div key={id}>
                <h3 className="font-bold text-lg text-white capitalize mb-4">
                  {title}
                </h3>
                <ul className="footer flex flex-col gap-4">
                  {links.map(({ path, text, id }) => {
                    return (
                      <li key={id}>
                        <Link href={path}>
                          <a className="text-sm hover:text-primary transition-all duration-300 capitalize text-white">
                            {text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div>
            <h3 className="font-bold text-lg text-white capitalize mb-8">
              Ramsoft Systems Inc.
            </h3>
            <ul className="footer-link flex flex-col gap-3">
              <li className="flex text-white gap-4 text-sm mb-4">
                <div className="text-xl">
                  <BsTelephoneForward />
                </div>
                <span>248- 354- 0100 </span>
              </li>{" "}
              <li className="flex text-white gap-4 text-sm mb-4">
                <div className="text-xl">
                  <AiOutlineMail />
                </div>
                <span> info@ramsoft.net </span>
              </li>
              <li className=" flex text-white gap-4 text-sm mb-4">
                <div className="text-xl text-white">
                  <BsMap />
                </div>
                <span> Ramsoft Systems Inc, 29777 Telegraph Road, Suite # 2250
                  Southfield, MI – 48034</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="mb-7">
              <Image
                width={228}
                height={55}
                src={`/imgs/E-Verify_logo.png`}
                alt="logo"
              />
            </div>
            <div>
              <Image
                src={`/imgs/logo-2.png`}
                alt="logo"
                width={145}
                height={92}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const icons = [
  { id: 1, icon: <FaFacebookSquare />, path: "" },
  { id: 2, icon: <FaInstagramSquare />, path: "" },
  { id: 3, icon: <FaLinkedin />, path: "" },
  { id: 4, icon: <FaTwitterSquare />, path: "" },
  { id: 5, icon: <FaYoutubeSquare />, path: "" },
];

const pages = [
  {
    id: 1,
    title: "Company Info",
    links: [
      { id: 1, text: "home", path: "/" },
      { id: 4, text: "industries", path: "/industries" },
      { id: 5, text: "job seekers", path: "/job-seekers" },
      { id: 7, text: "contact us", path: "/contact-us" },
    ],
  },
];
