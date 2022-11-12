import Head from "next/head";
import Layout from "@/layout/Layout";
import AboutTemplate from "@/templates/AboutTemplate";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AboutTemplate />
      </Layout>
    </>
  );
};

export default Contact;
