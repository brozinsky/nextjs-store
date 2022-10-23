import Head from "next/head";

import Header from "@/modules/navigation/Header";
import Footer from "@/modules/navigation/Footer";
import ProductTemplate from "@/templates/product/ProductTemplate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <Header />
          <ProductTemplate />
        <Footer />
      </div>
    </>
  );
}
