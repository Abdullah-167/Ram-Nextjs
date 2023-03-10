import React, { useState } from "react";
import { FiUser, FiSettings, FiMessageCircle } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { BsCodeSquare, BsArrow90DegRight, BsLaptop } from "react-icons/bs";
import ReadMoreLink from "../../Abstract/ReadMoreLink";
import Fade from "react-reveal/Fade";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const OurServices = () => {
  const [open, setOpen] = React.useState(false);
  const [modalId, setmodalId] = React.useState();
  const handleClickOpen = (id) => () => {
    setOpen(true);
    setmodalId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div className="w-full bg-[#F8FBFF]">
      <div className="max-w-6xl mx-auto px-4 py-32">
        <Fade bottom>
          <h1 className="text-[22px] font-[500] text-primary text-center uppercase">
            Ramsoft expertise
          </h1>
        </Fade>
        <Fade bottom>
          <p className="text-[44px] font-[700]  text-dark text-center mb-12">
            Our Services & Solutions
          </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => {
            return (
              <Fade bottom key={index}>
                <div className="services_card bg-white relative cursor-pointer shadow-card  px-6 pt-10 pb-24 transition-all duration-500 hover:-translate-y-7 rounded-xl">
                  <div className="flex justify-center">
                    <div
                      className={`${item.colorBg} flex justify-center shadow-xl items-center services_icon   text-white w-16 h-16 rounded-full mb-6`}
                    >
                      <span className="text-[30px]"> {item.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[22px] text-center  leading-[28px] text-dark font-bold mb-4">
                      {item.title}
                    </h1>

                    <div
                      className="absolute bottom-6  left-1/2 transform -translate-x-1/2 "
                      onClick={handleClickOpen(item.id)}
                    >
                      <ReadMoreLink />
                    </div>
                  </div>
                  {modalId === item.id && (
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      scroll={"paper"}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title">
                      {item.title} Service
                      </DialogTitle>
                      <DialogContent dividers={"paper"}>
                        <DialogContentText
                          id="scroll-dialog-description"
                          ref={descriptionElementRef}
                          tabIndex={-1}
                        >
                          <p className="text-dark text-base font-normal">
                            {item.description}
                          </p>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                      </DialogActions>
                    </Dialog>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const data = [
  {
    id: 1,
    icon: <FiUser />,
    colorBg: "colorA",

    title: "Staffing",
    description: `RSI has been a provider of cutting-edge staffing solutions for the last 25 years. We are able to handle any volume of staffing needs, delivering results quickly and efficiently. We help clients hire TOP talent on Contract, Contract-to-hire and Direct Hire across the United States.`,
  },
  {
    id: 2,
    icon: <FaRegAddressCard />,
    colorBg: "colorB",

    title: "Consulting",
    description: `RSI has been a provider of highly skilled Consulting talent since 1993. Our trained Consultants can assist on any project need, assisting our clients in maximizing efficiency, while reducing costs.`,
  },
  {
    id: 3,
    icon: <BsCodeSquare />,
    colorBg: "colorC",

    title: "End to End Project Solutions",
    description: `RSI is experienced in providing E2E Project Management for the entire Life Cycle of your project. We are adept in Planning and Executing a wide range of projects in the IT space, and can deliver strong cost savings, while providing maximum results.`,
  },
  {
    id: 4,
    icon: <FiMessageCircle />,
    colorBg: "colorD",

    title: "Recruiting Process Outsourcing",
    description: `RSI provides end-to-end RPO services to its clients. RSI’s RPO allows small to large businesses to source & hire the best talent in no time. Whether you need limited recruitment support or the complete recruitment solution. We deliver what you need.`,
  },
  {
    id: 5,
    icon: <BsArrow90DegRight />,
    colorBg: "colorE",
    iconBg: "#ffb74d",
    title: "Business Process Outsourcing",
    description: `RSI is a best-in-class BPO service provider,  offering a wide range of services for clients spanning different industries. RSI provides a highly qualified workforce that guarantees optimal levels of productivity and guaranteed quality.`,
  },
  {
    id: 6,
    icon: <BsLaptop />,
    colorBg: "colorF",

    title: "Application and Software Development",
    description: `RSI specializes in design implementation, and can deliver both turnkey software solutions and ongoing user support.`,
  },
  {
    id: 7,
    icon: <FiSettings />,
    colorBg: "colorG",
    title: "Tools and Technologies",
    description: `RSI focuses on teaching and developing emerging technologies and product competencies with an eye to our client’s current and future needs.`,
  },
];
