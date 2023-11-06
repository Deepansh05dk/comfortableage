import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCartitem from "@/components/CheckoutCartitem";

const Details = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-8">
      <div>
        <div>
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-[0%] rounded-full bg-red-600"></div>
          </div>

          <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
            <li className="flex items-center justify-start text-red-600 sm:gap-1.5">
              <span className="hidden sm:inline"> Details </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </li>

            <li className="flex items-center justify-center  sm:gap-1.5">
              <span className="hidden sm:inline"> Address </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </li>

            <li className="flex items-center justify-end sm:gap-1.5">
              <span className="hidden sm:inline"> Payment </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>

          <div className="flex space-x-4 flex-col md:flex-row">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
              {/* <!-- product - start --> */}
              {Object.keys(cart).map((key) => {
                return (
                  <CheckoutCartitem id={key} itemCode={key}></CheckoutCartitem>
                );
              })}
            </div>

            {/* <!-- totals - start --> */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex space-x-2 md:space-x-4 items-end">
                  <input
                    name="email"
                    className="w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
                    placeholder="Enter promocode"
                  />
                  <button>
                    <Button text={"Apply"} />
                  </button>
                </div>
                <div className="w-full rounded-lg bg-gray-50 p-4 font-semibold ">
                  <div className="space-y-1">
                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>Subtotal</span>
                      <span>$129.99</span>
                    </div>
                    <div className="flex justify-between gap-4 text-green-400">
                      <span>Discount</span>
                      <span>− $4.99</span>
                    </div>

                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>Shipping</span>
                      <span>$4.99</span>
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-start justify-between gap-4 text-gray-800">
                      <span className="text-lg font-bold">Total</span>

                      <span className="flex flex-col items-end">
                        <span className="text-lg font-bold">$134.98 USD</span>
                        <span className="text-sm text-gray-500">
                          including VAT
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Link href={"/checkout/address"}>
                <Button text={"Continue"} />
              </Link>
            </div>
          </div>

          {/* <!-- totals - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
