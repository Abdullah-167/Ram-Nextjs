import Link from "next/link";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
const MeetOurServices = ({ button }) => {
  return (
    <div className="w-full py-32">
      <div className="main-container">
        <div className="grid gap-8   lg:grid-cols-2">
          <div className="lg:order-none order-last flex self-center">
            <div>
              <Fade bottom>
                <h3 className="text-primary text-3xl font-medium mb-3">
                  Meet Our Services
                </h3>
              </Fade>
              <Fade bottom>
                <h2 className=" text-gray text-[40px] font-semibold leading-[44px] mb-8 ">
                  <Typist
                    sentences={[
                      "Staff Augmentation",
                      "Recruitment Process Outsourcing ",
                      "Payroll",
                      "Services",
                      "IT Solutions",
                    ]}
                    loop={false}
                  />
                </h2>
              </Fade>

              <Fade bottom>
                <p className="desc text-gray mb-5">
                  Today, RSI has grown to cater to clients in virtually every
                  major industry including; Automotive, Aerospace, Energy,
                  Retail, Entertainment & Media, Hospitality, Healthcare,
                  Government (Federal & State).
                </p>
              </Fade>
              {button === true && (
                <Fade bottom>
                  <div className="flex justify-start">
                    <div className="buttons">
                      <Link href={"/services"}>
                        <button className="btn-hover color-5">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </Fade>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center">
            <Fade bottom>
              <div className="max-w-[400px] rounded-2xl overflow-hidden">
                <video
                  id="background-video"
                  playsinline="true"
                  disablePictureInPicture="true"
                  autoPlay
                  loop
                  muted
                >
                  <source src={`/imgs/services-vid.mp4`} type="video/mp4" />
                </video>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurServices;
