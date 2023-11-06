import Head from "next/head";
import { Inter } from "next/font/google";
import { Carousel } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ComfortAge-Where Age Meets Comfort in Every Cart</title>
        <meta
          name="description"
          content="Discover a world of comfort and convenience at ComfortableAge. Shop a wide range of products designed to enhance the quality of life for seniors. From adaptive clothing and mobility aids to wellness essentials and home comforts, we've got you covered. Aging gracefully has never been this comfortable. Explore our senior-friendly online store today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="bg-red-600 px-4 py-3 text-white">
          <p className="text-center text-sm font-medium">
            Love Alpine JS?
            <a href="#" className="inline-block underline">
              Check out this new course!
            </a>
          </p>
        </div>
        <Carousel autoplay>
          <section className="w-full h-[40vh] relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"></section>
          <section className="w-full h-[40vh] relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"></section>
        </Carousel>

        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                New Collection
              </h2>

              <p className="max-w-md mx-auto mt-4 text-gray-500"></p>
            </header>

            <ul className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
              <li>
                <a href="#" className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      Casual Trainers
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      Winter Jumpers
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>

              <li className="sm:col-span-2 sm:col-start-2 sm:row-span-2 sm:row-start-1">
                <a href="#" className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                    alt=""
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      Skinny Jeans Blue
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
