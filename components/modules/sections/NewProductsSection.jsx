import { useState, useEffect } from "react";
import { useQuery } from "urql";
import ProductCard from "@/modules/ProductCard";
import LoaderSkeleton from "@/elements/loaders/LoaderSkeleton";
import Error from "@/elements/Error";
import { PRODUCT_FILTER_NEW_QUERY } from "@/lib/query";

const NewProductsSection = () => {
  const [results] = useQuery({
    query: PRODUCT_FILTER_NEW_QUERY,
  });
  const { data, fetching, error } = results;

  if (fetching) return <LoaderSkeleton />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;
  return (
    <div className="my-12">
      <h2 className="mx-auto mb-8 text-3xl font-medium text-center uppercase">
        Check our <span className="text-primary-500">newest</span> products:
      </h2>
      <div className="grid grid-cols-3">
        {products &&
          products.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
    </div>
  );
};

export default NewProductsSection;
