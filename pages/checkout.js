import React, { useEffect, useState } from "react";

const checkout = () => {
  const [value, setvalue] = useState("Loading ....");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const a = await fetch("https://dummyjson.com/carts");
  //     const data = await a.json();
  //     setvalue(JSON.stringify(data));
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="checkout-steps">
        <h2 className="sr-only">Steps</h2>

        <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
          <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
            <li className="relative flex justify-start text-blue-600">
              <span className="absolute -bottom-[1.75rem] start-0 rounded-full bg-blue-600 text-white">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Details </span>

              <svg
                className="h-6 w-6 sm:hidden"
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

            <li className="relative flex justify-center text-blue-600">
              <span className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Address </span>

              <svg
                className="mx-auto h-6 w-6 sm:hidden"
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

            <li className="relative flex justify-end">
              <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Payment </span>

              <svg
                className="h-6 w-6 sm:hidden"
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
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
            {/* <!-- product - start --> */}
            <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              <a
                href="#"
                className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                  loading="lazy"
                  alt="Photo by Thái An"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <a
                    href="#"
                    className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Top
                  </a>

                  <span className="block text-gray-500">Size: S</span>
                  <span className="block text-gray-500">Color: White</span>
                </div>

                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                    $15.00
                  </span>

                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    In stock
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input
                      type="number"
                      value="1"
                      className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
                    />

                    <div className="flex flex-col divide-y border-l">
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        +
                      </button>
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        -
                      </button>
                    </div>
                  </div>

                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    Delete
                  </button>
                </div>

                <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">
                    $15.00
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- product - end -->

      <!-- product - start --> */}
            <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              <a
                href="#"
                className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200"
                  loading="lazy"
                  alt="Photo by Jessica Radanavong"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <a
                    href="#"
                    className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Jacket
                  </a>

                  <span className="block text-gray-500">Size: M</span>
                  <span className="block text-gray-500">Color: Black</span>
                </div>

                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                    $65.00
                  </span>

                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    In stock
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input
                      type="number"
                      value="1"
                      className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
                    />

                    <div className="flex flex-col divide-y border-l">
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        +
                      </button>
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        -
                      </button>
                    </div>
                  </div>

                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    Delete
                  </button>
                </div>

                <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">
                    $65.00
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- product - end --> */}

            {/* <!-- product - start --> */}
            <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              <a
                href="#"
                className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200"
                  loading="lazy"
                  alt="Photo by vahid kanani"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <a
                    href="#"
                    className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Business suit
                  </a>

                  <span className="block text-gray-500">Size: S</span>
                  <span className="block text-gray-500">Color: Black</span>
                </div>

                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                    $49.99
                  </span>

                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    In stock
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <input
                      type="number"
                      value="1"
                      className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
                    />

                    <div className="flex flex-col divide-y border-l">
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        +
                      </button>
                      <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        -
                      </button>
                    </div>
                  </div>

                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    Delete
                  </button>
                </div>

                <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">
                    $49.99
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- product - end --> */}
          </div>

          {/* <!-- totals - start --> */}
          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>$129.99</span>
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
                    <span className="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>

            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
          {/* <!-- totals - end --> */}
        </div>
      </div>
    </div>
  );
};

export default checkout;
