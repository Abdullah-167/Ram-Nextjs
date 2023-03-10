import Image from "next/image";
import Link from "next/link";

const Nav = ({ navLinks }) => {
  return (
    <div>
      <div className="w-full shadow-md px-[2%] py-6 pt-16 bg-white flex justify-between items-center">
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
        <div className="flex gap-9">
          <ul className="footer flex gap-6 items-center">
            {navLinks.map(({ id, text, path }) => {
              return (
                <li key={id}>
                  <Link href={path}>
                    <a className="hover:text-primary text-dark transition-all duration-500 capitalize">
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex">
            <Link href="/contact-us">
              <button className="btn-hover color-5">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
