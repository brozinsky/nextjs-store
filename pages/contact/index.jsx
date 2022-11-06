import Head from "next/head";
import Layout from "@/layout/Layout";
import ContactTemplate from "@/templates/ContactTemplate";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ContactTemplate />
      </Layout>
    </>
  );
};

export default Contact;
