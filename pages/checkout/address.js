import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Buttonoutlined from "@/components/Buttonoutlined";
import Addressform from "@/components/Addressform";

const Address = () => {
  const [value, setvalue] = useState("Loading ....");
  const [addaddress, setaddaddress] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const a = await fetch("https://dummyjson.com/carts");
  //     const data = await a.json();
  //     setvalue(JSON.stringify(data));
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-8">
      <div>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div className="h-2 w-1/2 rounded-full bg-red-600"></div>
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

          <li className="flex items-center justify-center text-red-600 sm:gap-1.5">
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
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Select Address
            </h2>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
            <fieldset className="space-y-4">
              <div>
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryStandard"
                  id="DeliveryStandard"
                  className="peer hidden [&:checked_+_label_svg]:block"
                  checked
                />

                <label
                  htmlFor="DeliveryStandard"
                  className="flex py-8 cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-md hover:border-gray-200 peer-checked:border-red-500 peer-checked:ring-1 peer-checked:ring-red-500"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="hidden h-24 w-24 sm:h-12 sm:w-12 text-red-600"
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

                    <div className="flow-root">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Title</dt>
                          <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Name</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            John Frusciante
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Occuputation
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            Guitarist
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Salary</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            $1,000,000+
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Bio</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Et facilis debitis explicabo doloremque
                            impedit nesciunt dolorem facere, dolor quasi
                            veritatis quia fugit aperiam aspernatur neque
                            molestiae labore aliquam soluta architecto?
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryPriority"
                  id="DeliveryPriority"
                  className="peer hidden [&:checked_+_label_svg]:block"
                />

                <label
                  htmlFor="DeliveryPriority"
                  className="flex cursor-pointer py-8 items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-md hover:border-gray-200 peer-checked:border-red-500 peer-checked:ring-1 peer-checked:ring-red-500"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      className="hidden h-24 w-24 sm:h-12 sm:w-12 text-red-600"
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

                    <div className="flow-root">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Title</dt>
                          <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Name</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            John Frusciante
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Occuputation
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            Guitarist
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Salary</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            $1,000,000+
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Bio</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Et facilis debitis explicabo doloremque
                            impedit nesciunt dolorem facere, dolor quasi
                            veritatis quia fugit aperiam aspernatur neque
                            molestiae labore aliquam soluta architecto?
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="mb-8">
            <button onClick={() => setaddaddress(!addaddress)}>
              {" "}
              <Button text={"+ Add new address"} />
            </button>

            {addaddress && <Addressform />}
          </div>
          <div className="flex mt-4 flex-col items-end ">
            <div className="flex space-x-2 md:space-x-4 ">
              <Link href={"/checkout/details"}>
                <Buttonoutlined text={"Back"} />
              </Link>
              <Link href={"/checkout/payment"}>
                <Button text={"Continue"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
