import Head from 'next/head';
import { useQuery } from 'urql';
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants';

import Error from '@/components/Error';
import ProductCard from '@/components/ProductCard';
import LoaderSpinner from '@/UI/loaders/LoaderSpinner';
import LoaderSkeleton from '@/UI/loaders/LoaderSkeleton';
import Header from '@/UI/Header';
import Footer from '@/UI/Footer';
import Layout from '@/layout/Layout'
import { PRODUCT_QUERY } from '@/lib/query';

export default function Cart() {
  const [results] = useQuery({query: PRODUCT_QUERY});
  const {data, fetching, error} = results;
  // console.log(data);

  if (fetching) return <LoaderSpinner />
  if (error) return <Error message={error.message}/>
  const products = data.products.data;

  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className='title-main'>aasdasdasds</h1>
        <div className='grid grid-cols-3'>
          {products && products.map((product, i) => {
            return  <ProductCard key={i} product={product}/>
          })}
         </div>
      </Layout>
    </>
  )
}
