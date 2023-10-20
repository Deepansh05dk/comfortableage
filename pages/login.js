import React, { useState } from "react";
import Otpverification from "@/components/Otpverification";
import Button from "@/components/Button";

function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const login = () => {
  const [show, setshow] = useState(true);
  const [email, setemail] = useState("");
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  return (
    <div className="relative flex w-full flex-col justify-center overflow-hidden bg-gray-200 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        {show ? (
          <div>
            <div className="flex flex-col gap-6 p-4 md:p-8">
              <div className="font-semibold text-3xl">
                <p className="text-center">Login/signup</p>
              </div>
              <div>
                <input
                  name="email"
                  className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
                <p className="text-red-500">Please enter valid email address</p>
              </div>
              <button
                onClick={() => !isValidEmail(email) && alert("Invalid Email")}
              >
                {/* setshow(!show)
                 }> */}{" "}
                <Button text={"Request OTP"}></Button>
              </button>

              <div className="relative flex items-center justify-center">
                <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                <span className="relative bg-white px-4 text-sm text-gray-400">
                  Log in with social
                </span>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                <svg
                  className="h-5 w-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="flex items-center justify-center p-4">
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        ) : (
          <Otpverification />
        )}
      </div>
    </div>
  );
};

export default login;
