import { useQuery } from "urql";
import { useState } from "react";
import LoaderSpinner from "@/elements/loaders/LoaderSpinner";
import ProductCard from "@/modules/ProductCard";
import LoaderSkeleton from "@/elements/loaders/LoaderSkeleton";
import Error from "@/elements/Error";
import Filter from "@/modules/filter/Filter";
import { PRODUCT_QUERY } from "@/lib/query";

const HomeTemplate = () => {
  const [query, setQuery] = useState(PRODUCT_QUERY);
  const [results] = useQuery({ query: query });
  const { data, fetching, error } = results;
  // console.log(data);

  if (fetching) return <LoaderSkeleton />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;

  return (
    <>
      <div>
        <Filter setQuery={setQuery} />
      </div>
      <div className="grid grid-cols-3">
        {products &&
          products.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
    </>
  );
};

export default HomeTemplate;
