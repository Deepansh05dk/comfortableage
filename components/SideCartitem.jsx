import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGECART, REMOVECART } from "@/GlobalRedux/Features/CartSlice";

const Cartitem = ({ itemCode }) => {
  const value = useSelector((state) => state.cart[itemCode]);
  const dispatch = useDispatch();
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{value.name}</a>
            </h3>
            <p className="ml-4">₹{value.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div>
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-gray-500"
            >
              Qty
            </label>
            <select
              id="quantity"
              name="quantity"
              className=" ml-2 px-2 py-[2px] rounded-lg border-gray-300 text-gray-700 sm:text-sm outline-none focus:ring-1 ring-red-600"
              value={value.quantity}
              onChange={(e) =>
                dispatch(
                  CHANGECART({ itemCode: itemCode, qty: e.target.value })
                )
              }
            >
              {Array.from({ length: value.allowedqty }, (_, i) => (
                <option key={`${value.code}-${i + 1}`} value={`${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => dispatch(REMOVECART(itemCode))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cartitem;
