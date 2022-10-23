import { useQuery } from 'urql';
import LoaderSpinner from '@/elements/loaders/LoaderSpinner';
import ProductCard from "@/modules/ProductCard";
import LoaderSkeleton from '@/elements/loaders/LoaderSkeleton';
import Error from '@/elements/Error';
import { PRODUCT_QUERY } from '@/lib/query';

const HomeTemplate = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;
  // console.log(data);

  if (fetching) return <LoaderSpinner />;
  if (error) return <Error message={error.message} />;
  const products = data.products.data;

  return (
    <div className="grid grid-cols-3">
      {products &&
        products.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
    </div>
  );
};

export default HomeTemplate;
