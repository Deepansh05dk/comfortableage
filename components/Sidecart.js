import React, { useEffect, useState } from "react";
import Button from "./Button";
import Buttonoutlined from "./Buttonoutlined";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cartitem from "./SideCartitem";
import {
  ADDTOCART,
  CLEARCART,
  UPDATECART,
} from "@/GlobalRedux/Features/CartSlice";

const Sidecart = ({ show, setshow }) => {
  // const [sidecart, setSidecart] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (typeof localStorage !== "undefined") {
  //     if (localStorage.getItem("cart")) {
  //       setSidecart(JSON.parse(localStorage.getItem("cart")));
  //       dispatch(ADDTOCART(JSON.parse(localStorage.getItem("cart"))));
  //     }
  //   }
  // }, []);
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
                {Object.keys(cart).map((key, index) => {
                  return (
                    <Cartitem
                      id={index}
                      itemCode={key}
                      value={cart[key]}
                    ></Cartitem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="text-lg flex justify-between  font-medium text-gray-900">
            <p>Subtotal</p>
            <p className=" font-bold">
              {" "}
              ₹
              {Object.values(cart).reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.quantity * currentValue.price,
                0
              )}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and discount calculated at checkout.
          </p>

          <Link href="/checkout/details" className="block w-full mt-10">
            <Button text={"Checkout"} />
          </Link>
          <button
            onClick={() => {
              dispatch(CLEARCART());
            }}
            className="block w-full mt-6"
          >
            <Buttonoutlined text={"Clear"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidecart;
