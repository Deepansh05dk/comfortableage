import React from "react";
import Button from "./Button";
import Link from "next/link";

const Sidecart = ({ show, setshow }) => {
  const clearCart = () => {
    console.log("clear");
  };
  return (
    <div>
      <div
        className={
          "fixed top-0 right-0 transform z-50 h-screen transition overflow-y-scroll w-screen md:max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8" +
          (show ? "" : "md:translate-x-[24rem] translate-x-[100vw]")
        }
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <button
          onClick={() => setshow(false)}
          className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
        >
          <span className="sr-only">Close cart</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
              <div className="flex font-semibold items-center justify-end w-1/3 text-lg">
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
                <span className="mx-2 text-sm">1</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
              </div>
            </li>

            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
              <div className="flex font-semibold items-center justify-end w-1/3 text-lg">
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
                <span className="mx-2 text-sm">1</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
              <div className="flex font-semibold items-center justify-end w-1/3 text-lg">
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
                <span className="mx-2 text-sm">1</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
              <div className="flex font-semibold items-center justify-end w-1/3 text-lg">
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
                <span className="mx-2 text-sm">1</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="cursor-pointer text-pink-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                </svg>{" "}
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <div className="space-y-4 text-center">
            <span
              className="cursor-pointer w-full block group relative text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
              onClick={clearCart}
            >
              <span className="absolute inset-0 border border-current"></span>
              <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Clear
              </span>
            </span>
            <Link href="/checkout" onClick={() => setshow(false)}>
              {" "}
              <Button text={"Checkout"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecart;
