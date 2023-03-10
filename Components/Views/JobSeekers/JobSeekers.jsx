import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { BASE_URL } from "../../../config";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  BsCheck2Square,
  BsBagCheckFill,
  BsFillTrophyFill,
} from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaRegThumbsUp } from "react-icons/fa";

const JobSeekers = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const contactData = {
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        zipCode: data.zipcode,
        state: data.state,
        country: data.country,
      },
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    };
    fetch(BASE_URL + "api/job-seekers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        NotificationManager.success("Form Submitted Successfully!");
        console.log(data);
      });
  };
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        addressLin2: "",
        city: "",
        zipcode: "",
        state: "",
        country: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-dark text-[54px] font-bold mb-4">Job Seekers</h2>
        <p className="text-dark text-lg font-medium mb-20">
          Apply here to become a part of the <b className="text-primary">Ramsoft</b> family.
          <br />
          We're always looking for talented individuals, so send us your resume
          and we'll be sure to get in touch
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-20">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-[#d1d6dc] px-4 py-6 transition-all duration-500 hover:shadow-xl rounded-xl"
              >
                <span className="text-[30px] bg-primary mb-5 p-1.5 w-14 h-14 flex justify-center items-center text-white rounded-full shadow-xl">
                  {item.icon}
                </span>
                <h1 className="text-dark text-base leading-[24px] font-normal">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="text-dark text-[54px] font-bold mb-8">
            Personal Information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="firstName" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="lastName" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "*Required",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="email" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="phone" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Address"
                  {...register("address", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="address" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="
                Address Line 2
                "
                  {...register("addressLin2", {})}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="City"
                  {...register("city", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="city" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Zipcode"
                  {...register("zipcode", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="zipcode" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="State"
                  {...register("state", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="state" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Country"
                  {...register("country", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="country" />
                </span>
              </div>
            </div>
            {/* <div className=" mb-16 ">
              <div className="w-full">
                <div className=" mt-8">
                  <div className="rounded-lg shadow-xl bg-gray-50 py-4 px-4">
                    <div className="m-4">
                      <label className="inline-block mb-2  text-gray-500">
                        Upload Image(jpg,png,svg,jpeg)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-32 border-4 border-dashed border-[#949699] hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-12 h-12 text-[#555657] group-hover:text-gray-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-[#555657] group-hover:text-gray-600">
                              Select a photo
                            </p>
                          </div>
                          <input type="file" className="opacity-0" />
                        </label>
                      </div>
                    </div>
                    <div className="flex p-2 space-x-4">
                      <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="w-full">
              <div className="buttons">
                <button className="btn-hover color-5">
                  {" "}
                  {loading ? "Submit..." : "Submit"}{" "}
                </button>
              </div>
            </div>
            <NotificationContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;

const data = [
  {
    title: "Individual Approach",
    icon: <BsCheck2Square />,
  },
  {
    title: " Technical Expertise",
    icon: <BsBagCheckFill />,
  },
  {
    title: "Strong Client Relationships built over 25 years",
    icon: <BsFillTrophyFill />,
  },
  {
    title: "In House Immigration Support",
    icon: <TiMessages />,
  },
  {
    title: "Experienced Operations Team ",
    icon: <FaRegThumbsUp />,
  },
];
