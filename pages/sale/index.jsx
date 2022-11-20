import Head from "next/head";
import Layout from "@/layout/Layout";
import SaleTemplate from "@/templates/SaleTemplate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SaleTemplate />
      </Layout>
    </>
  );
}
