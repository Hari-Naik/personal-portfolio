import React from "react";
import { poppins } from "./Hero";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[920px] mx-auto px-8 my-20 flex flex-col items-center md:items-start">
      <h2 className="text-[17px] text-[#147efb] font-bold uppercase">
        Contact
      </h2>
      <p className="text-[18px] sm:text-[25px] text-[#2d2e32] font-bold">
        {`Don't`} be shy! Hit me up! 👇
      </p>
      <div className="flex flex-col sm:flex-row gap-8 mt-10">
        <div className="flex items-center gap-6">
          <div className="h-[50px] w-[50px] bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#147efb] ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
          </div>
          <div>
            <h2
              className={`${poppins.className} text-[17px] text-[#2d2e32] font-bold`}>
              Location
            </h2>
            <p className={`${poppins.className} text-[16px] text-[#767676]`}>
              Hyderabad, Telangana
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="h-[50px] w-[50px] bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#147efb]">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>
            <h2
              className={`${poppins.className} text-[17px] text-[#2d2e32] font-bold`}>
              Mail
            </h2>
            <Link
              href="mailto:harinaik.1205@gmail.com"
              className={`${poppins.className} text-[16px] text-[#767676] hover:text-[#147efb]`}>
              harinaik.1205@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
