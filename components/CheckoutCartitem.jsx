import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGECART, REMOVECART } from "@/GlobalRedux/Features/CartSlice";

const CheckoutCartitem = ({ itemCode }) => {
  const value = useSelector((state) => state.cart[itemCode]);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
      <a
        href="#"
        className="group relative block h-40 w-32 overflow-hidden bg-gray-100 sm:h-40 sm:w-40"
      >
        <img
          src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
          loading="lazy"
          alt="Photo by Thái An"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>

      <div className="flex flex-1 flex-col justify-center  py-4">
        <div>
          <a
            href="#"
            className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {value.name}
          </a>

          <span className="block text-gray-500">Size: S</span>
          <span className="block text-gray-500">Color: White</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t p-4 sm:w-auto sm:pl-0 lg:p-6 lg:pl-0">
        <div>
          <label for="quantity" className="text-sm font-medium text-gray-500">
            Qty
          </label>
          <select
            name="quantity"
            className=" ml-2 px-2 py-[2px] rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm outline-none focus:ring-1 ring-red-600"
            value={value.quantity}
            onChange={(e) =>
              dispatch(CHANGECART({ itemCode: itemCode, qty: e.target.value }))
            }
          >
            {Array.from({ length: value.allowedqty }, (_, i) => (
              <option key={`${value.code}-${i + 1}`} value={`${i + 1}`}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="ml-4  md:ml-8  lg:ml-16">
          <span className="block font-bold text-gray-800 md:text-lg">
            ₹{value.price}
          </span>
        </div>
        <button
          onClick={() => dispatch(REMOVECART(itemCode))}
          className="select-none ml-4  md:ml-8  lg:ml-16 text-sm font-semibold text-red-500 transition duration-100 hover:text-red-600 active:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CheckoutCartitem;
