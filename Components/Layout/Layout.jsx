import Footer from "./Footer";
import Nav from "./Nav";
import ContNavbar from "./ContNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <ContNavbar />
      <Nav navLinks={navLinks} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
const navLinks = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "industries", path: "/industries" },
  { id: 3, text: "Services", path: "/services" },
  { id: 4, text: "About Us", path: "/about-us" },
  { id: 5, text: "job seekers", path: "/job-seekers" },
];
