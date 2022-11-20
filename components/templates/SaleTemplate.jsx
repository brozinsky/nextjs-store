import { useQuery } from "urql";
import LoaderSkeleton from "@/elements/loaders/LoaderSkeleton";
import Error from "@/elements/Error";
import Filter from "@/modules/filter/Filter";
import ProductCard from "@/modules/ProductCard";
import { PRODUCT_FILTER_SALE_QUERY } from "@/lib/query";

const ProductsTemplate = () => {
  const [results] = useQuery({
    query: PRODUCT_FILTER_SALE_QUERY,
  });
  const { data, fetching, error } = results;

  if (fetching) return <LoaderSkeleton />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;

  return (
    <>
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
