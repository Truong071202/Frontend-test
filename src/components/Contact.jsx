import React from "react";

const Contact = () => {
  return (
    <div className="bg-custom-color-contact mx-6 text-white my-6">
      <div className="flex flex-col lg:gap-4 gap-2 xl:p-10 lg:p-8 p-4 items-center justify-center font-semibold ">
        <h3 className="text-center xl:text-lg md:text-base text-sm">
          Apply{" "}
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Copin Affilate Program
          </span>{" "}
          to get <br />
          more benefits!
        </h3>
        <p className="text-custom-text-contact xl:text-lg md:text-base text-sm">
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Contact;
