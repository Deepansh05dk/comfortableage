import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <main className="bg-red-500">this is body</main>
    </>
  );
}
