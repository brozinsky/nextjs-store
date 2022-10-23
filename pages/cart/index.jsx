import Head from 'next/head';
import Layout from '@/layout/Layout';
import CartTemplate from '@/templates/cart/CartTemplate';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <CartTemplate />
      </Layout>
    </>
  )
}
