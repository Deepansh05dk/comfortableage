import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "@/GlobalRedux/Features/CartSlice";

const Products = ({ menuItems }) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { slug } = route.query;
  const AddToCart = (Product) => {
    dispatch(
      ADDTOCART({
        title: Product.title,
        price: Product.price,
        thumbnail: Product.thumbnail,
        itemCode: Product._id,
        brand: Product.brand,
        allowedqty: Product.allowedqty,
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {slug?.toUpperCase()}
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Here is some cool collections of {slug}
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {menuItems.map((menuitem) => {
            return (
              <div>
                <Link
                  href="#"
                  className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
                >
                  <img
                    src={menuitem.thumbnail}
                    loading="lazy"
                    alt="Photo by Vladimir Fedotov"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>

                <div className="flex flex-col items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                  <div className="flex flex-row justify-between w-full">
                    <span className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">
                      {menuitem.title}
                    </span>
                    <span className="font-bold text-gray-600 lg:text-lg">
                      ₹{menuitem.price}
                    </span>
                  </div>

                  <div className="flex flex-row justify-between w-full">
                    <span className="text-sm text-gray-500 lg:text-base">
                      by {menuitem.brand}
                    </span>

                    <button
                      onClick={() => AddToCart(menuitem)}
                      className="mt-2"
                    >
                      <Button text={"Add to cart"} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
export async function getServerSideProps({ params }) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${params.slug}`
    );
    const data = await response.json();
    return {
      props: { menuItems: data },
    };
  } catch (error) {}
}
