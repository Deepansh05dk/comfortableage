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
              {Object.keys(cart).length === 0 && (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-24 w-24 text-gray-400 mb-4"
                  >
                    <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg font-semibold mb-4">
                    Your shopping cart is empty.
                  </p>
                </div>
              )}

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
