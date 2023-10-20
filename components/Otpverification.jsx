import React, { useEffect } from "react";
import Button from "./Button";
import OTPInput from "./Otpinput";
import Link from "next/link";

// function to handle otp inputs

const Otpverification = () => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>OTP Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>Enter the OTP you received</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col space-y-16">
          {/* <div
                id="otp"
                className="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
              >
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    maxLength="1"
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    maxLength="1"
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    maxLength="1"
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    maxLength="1"
                  />
                </div>
              </div> */}
          <OTPInput />
          <div className="flex flex-col space-y-5">
            <div>
              <Link href="/">
                <Button text={"Verify Account"}></Button>
              </Link>
            </div>

            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
              <p>Didn't recieve code?</p>{" "}
              <span
                className="flex flex-row items-center text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otpverification;
