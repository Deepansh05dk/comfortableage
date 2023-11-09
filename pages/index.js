import Head from "next/head";
import { Inter } from "next/font/google";
import { Carousel } from "antd";
import Link from "next/link";

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
            Get Flat 10% Off on your first order above 1100. Use code FLAT10
          </p>
        </div>
        <Carousel autoplay>
          <section className="w-full h-[50vh] relative bg-[url(https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww)] bg-cover bg-center bg-no-repeat"></section>
          <section className="w-full h-[50vh] relative bg-[url(https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww)] bg-cover bg-center bg-no-repeat"></section>
          <section className="w-full h-[50vh] relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"></section>
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
                <Link
                  href="./collections/fragrances"
                  className="relative block group"
                >
                  <img
                    src="./fragnances.jpg"
                    alt="Fragrances"
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      Fragrances
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="./collections/skincare"
                  className="relative block group"
                >
                  <img
                    src="./skincare.jpg"
                    alt="skincare"
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">Skincare</h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </Link>
              </li>

              <li className="sm:col-span-2 sm:col-start-2 sm:row-span-2 sm:row-start-1">
                <Link
                  href="./collections/home-decoration"
                  className="relative block group"
                >
                  <img
                    src="./homedecor.jpg"
                    a
                    alt=" Home Decoration"
                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      Home Decoration
                    </h3>

                    <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                      Shop Now
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
