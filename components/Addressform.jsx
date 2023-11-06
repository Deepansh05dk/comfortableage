import React from "react";
import Button from "./Button";

const Addressform = () => {
  return (
    <div className=" my-4  border-1 rounded-lg border border-gray-100 bg-white shadow-md p-4">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        New Address information
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded border px-3 py-3 text-gray-800 outline-none ring-red-600 transition duration-100 focus:ring-1"
            />
          </div>
        </div>
        <div className="col-span-full flex justify-end">
          <Button text={"Add"} />
        </div>
      </div>
    </div>
  );
};

export default Addressform;
