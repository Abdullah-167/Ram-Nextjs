import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { BASE_URL } from "../../../config";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const Contact = () => {
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
        name: data.name,
        organization: data.Organization,
        address: data.Address,
        city: data.City,
        country: data.Country,
        state: data.State,
        phone: data.Phone,
        email: data.Email,
        message: data.Message,
        website: data.Website,
        postalCode: data.Postal,
        fax: data.Fax,
      },
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    };
    fetch(BASE_URL + "api/contacts", requestOptions)
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
        name: "",
        Organization: "",
        Address: "",
        City: "",
        Country: "",
        State: "",
        Phone: "",
        Email: "",
        Message: "",
        Website: "",
        Postal: "",
        Fax: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <h2 className="text-dark text-[54px] font-bold mb-8">Contact Us</h2>
            <h1 className="text-primary text-[22px] font-medium mb-3">
              Request for services
            </h1>
            <p className="text-dark text-lg font-normal mb-5">
              Please let us know what service you are interested in by
              completing the form below. We will get in touch with you shortly.
            </p>
            <h1 className="text-primary text-[22px] font-medium mb-3">
              Industry
            </h1>
            <p className="text-dark text-lg font-normal">
              Please a provide a brief description regarding the nature of the
              request/service requirements looking to be fulfilled.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/imgs/contact-us-hero-v8.webp" alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-dark text-[54px] font-bold mb-8">
            How can we help?
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="name" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Organization"
                  {...register("Organization", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Organization" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Address"
                  {...register("Address", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Address" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="City"
                  {...register("City", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="City" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Country"
                  {...register("Country", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Country" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="State/Province"
                  {...register("State", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="State" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Phone"
                  {...register("Phone", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Phone" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: "*Required",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Email" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Message"
                  {...register("Message", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  <ErrorMessage errors={errors} name="Message" />
                </span>
              </div>
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Website"
                  {...register("Website", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  {" "}
                  <ErrorMessage errors={errors} name="Website" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 ">
              <div className="w-full">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Postal Code"
                  {...register("Postal", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  <ErrorMessage errors={errors} name="Postal" />
                </span>
              </div>
              <div className="w-full mb-8">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#d1d6dc] focus-within:border-primary rounded-full py-[16px] px-6 leading-tight focus:outline-none focus:bg-white focus:border-[#d1d6dc]-500"
                  type="text"
                  placeholder="Fax"
                  {...register("Fax", {
                    required: "*Required",
                  })}
                />
                <span className="text-red-600 text-sm pl-3">
                  <ErrorMessage errors={errors} name="Fax" />
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="buttons">
                <button className="btn-hover color-5">
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

export default Contact;
