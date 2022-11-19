import JacketProductsImage from "@/public/home/categories/products-jackets.jpg";
import PantsProductsImage from "@/public/home/categories/products-pants.jpg";
import ShoesProductsImage from "@/public/home/categories/products-shoes.jpg";
import HatsProductsImage from "@/public/home/categories/products-hats.jpg";
import Category from "@/modules/Category";

const items = [
  { id: "0", name: "Jackets", image: JacketProductsImage },
  { id: "2", name: "Pants", image: PantsProductsImage },
  { id: "3", name: "Shoes", image: ShoesProductsImage },
  { id: "4", name: "Hats", image: HatsProductsImage },
];

const ProductCategories = () => {
  return (
    <div className="grid items-center justify-center grid-cols-2 gap-4 mt-2 mb-8 lg:grid-cols-4">
      {items.map(({ id, name, image }) => {
        return <Category key={id + name} content={name} image={image} />;
      })}
    </div>
  );
};

export default ProductCategories;
