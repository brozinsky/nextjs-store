import { useQuery } from "urql";
import { useState, useEffect } from "react";
import LoaderSkeleton from "@/elements/loaders/LoaderSkeleton";
import Error from "@/elements/Error";
import Filter from "@/modules/filter/Filter";
import ProductCard from "@/modules/ProductCard";
import { useQueryContext } from "@/contexts/QueryContext";
import { PRODUCT_FILTER_QUERY } from "@/lib/query";
import Breadcrumbs from "@/modules/navigation/Breadcrumbs";

const ProductsTemplate = () => {
  const [filters, setFilters] = useState(null);
  const { sort } = useQueryContext();

  const { collection, isNew, isSale } = useQueryContext();

  useEffect(() => {
    if (collection !== "" || isNew || isSale) {
      setFilters(
        `{
          ${isNew ? `new: { eq: ${isNew}}` : ``}
          ${isSale ? `discount: { not: null}` : ``}
          ${
            collection !== ""
              ? `Collection: { eq: ${JSON.stringify(collection)} }`
              : ``
          }
      }
      `
      );
    } else {
      setFilters(null);
    }
  }, [collection, isNew, isSale]);

  const [results] = useQuery({
    query: PRODUCT_FILTER_QUERY(sort, filters),
  });
  const { data, fetching, error } = results;

  if (fetching) return <LoaderSkeleton />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;

  return (
    <>
      <Breadcrumbs />
      <div>
        <Filter />
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

export default ProductsTemplate;
