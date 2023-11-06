import React from "react";
import Button from "./Button";
import Buttonoutlined from "./Buttonoutlined";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cartitem from "./SideCartitem";
import { CLEARCART } from "@/GlobalRedux/Features/CartSlice";

const Sidecart = ({ show, setshow }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={
          "fixed top-0 right-0 transform z-50 h-screen transition overflow-y-scroll w-screen md:max-w-sm border border-gray-600 bg-gray-100 " +
          (show ? "" : "md:translate-x-[24rem] translate-x-[100vw]")
        }
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setshow(!show)}
              >
                <span className="sr-only">Close panel</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {Object.keys(cart).map((key) => {
                  return <Cartitem id={key} itemCode={key}></Cartitem>;
                })}
                {/* <!-- More products... --> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>

          <button className="w-full mt-6">
            <Button text={"Checkout"} />
          </button>
          <button
            onClick={() => {
              dispatch(CLEARCART());
            }}
            className="w-full mt-6"
          >
            <Buttonoutlined text={"Clear"} />
          </button>

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className=" ml-2 font-medium text-red-600 hover:text-red-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecart;
