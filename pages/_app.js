import "@/styles/globals.css";
import { DataProvider } from "@/context/DataProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}
