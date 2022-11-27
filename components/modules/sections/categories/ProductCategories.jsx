import JacketProductsImage from "@/public/home/categories/products-jackets.jpg";
import PantsProductsImage from "@/public/home/categories/products-pants.jpg";
import ShoesProductsImage from "@/public/home/categories/products-shoes.jpg";
import HatsProductsImage from "@/public/home/categories/products-hats.jpg";

import JacketIcon from "@/public/home/categories/icon-jacket.png";
import PantsIcon from "@/public/home/categories/icon-pants.png";
import ShoesIcon from "@/public/home/categories/icon-shoes.png";
import HatsIcon from "@/public/home/categories/icon-hat.png";
import Category from "@/modules/Category";

const items = [
  { id: "0", name: "Jackets", image: JacketProductsImage, icon: JacketIcon },
  { id: "2", name: "Pants", image: PantsProductsImage, icon: PantsIcon },
  { id: "3", name: "Shoes", image: ShoesProductsImage, icon: ShoesIcon },
  { id: "4", name: "Hats", image: HatsProductsImage, icon: HatsIcon },
];

const ProductCategories = () => {
  return (
    <div className="grid items-center justify-center grid-cols-2 gap-4 mt-2 mb-8 lg:grid-cols-4">
      {items.map(({ id, name, image, icon }) => {
        return (
          <Category key={id + name} content={name} image={image} icon={icon} />
        );
      })}
    </div>
  );
};

export default ProductCategories;
