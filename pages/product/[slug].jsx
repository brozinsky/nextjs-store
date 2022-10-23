import Head from "next/head";
import { useRouter } from "next/router";
import Image from 'next/image';
import { useQuery } from "urql";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";

import Error from "@/elements/Error";
import LoaderSpinner from "@/elements/loaders/LoaderSpinner";
import LoaderSkeleton from "@/elements/loaders/LoaderSkeleton";
import ProductCard from "@/modules/ProductCard";
import Header from "@/modules/navigation/Header";
import Footer from "@/modules/navigation/Footer";
import { GET_PRODUCT_QUERY } from "@/lib/query";

export default function Home() {
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  // console.log(data);

  if (fetching) return <LoaderSpinner />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;
  const { title, description, image, price } = data.products.data[0].attributes;
  console.log(products);
  return (
    <>
      <Head>
        <title>Clothing store</title>
        <meta name="description" content="We got all you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className='container mx-auto'>
            <div className="relative flex items-center min-h-screen p-5 overflow-hidden min-w-screen lg:p-10">
                <div className="relative w-full max-w-6xl p-10 mx-auto text-gray-800 bg-white rounded shadow-xl lg:p-20 md:text-left">
                    <div className="items-center -mx-10 md:flex">
                        <div className="w-full px-10 mb-10 md:w-1/2 md:mb-0">
                            <div className="relative">
                                <Image
                                  src={image.data.attributes.formats.medium.url}
                                  className="relative z-10 w-full"
                                  alt={title}
                                  width={352}
                                  height={352}
                                />
                            </div>
                        </div>
                        <div className="w-full px-10 md:w-1/2">
                            <div className="mb-10">
                                <h1 className="mb-5 text-2xl font-bold uppercase">{title}</h1>
                                <p className="text-sm">{description}</p>
                            </div>
                            <div>
                                <div className="inline-block mr-5 align-bottom">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="text-5xl font-bold leading-none align-baseline">{price}</span>
                                    {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                                </div>
                                <div className="inline-block align-bottom">
                                  <div className="flex flex-row">
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                  </div>
                                  <button className="px-10 py-2 font-semibold text-yellow-900 bg-yellow-300 rounded-full opacity-75 hover:opacity-100 hover:text-gray-900"><i className="mr-2 -ml-2 mdi mdi-cart"></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
