// pages/_app.js
import "../styles/globals.css"; // Ensure this path is correct
import Header from "../components/Header"; // Ensure this path is correct
import ProductDiscovery from "../components/ProductDiscovery";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* This should display your header */}
      <ProductDiscovery></ProductDiscovery>
      <ProductListing></ProductListing>
      <Footer></Footer>
      <Component {...pageProps} />{" "}
      {/* This renders the current page (e.g., index.js) */}
    </>
  );
}

export default MyApp;
