import Image from "next/image";
import Link from "next/link";
import Badge from "@/elements/badges/Badge";

const ProductCard = ({ product }) => {
  const { title, description, image, price, slug, discount } =
    product.attributes;
  const { url, width, height } = image.data.attributes.formats.thumbnail;
  return (
    <div className="flex max-w-md m-4 overflow-hidden bg-white rounded-lg shadow-lg">
      <Image
        className="cursor-pointer"
        src={url}
        width={width}
        height={height}
        alt={title}
      />
      <div className="relative w-2/3 p-4">
        {product.attributes.new ? <Badge color={"blue"} text={"New"} /> : null}
        {product.attributes.discount ? (
          <Badge color={"red"} text={"Sale"} />
        ) : null}
        <div>Category</div>
        <Link href={`/product/${slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="flex justify-between mt-3 item-center">
          <div className="flex flex-row gap-1">
            <span
              className={`text-xl font-bold text-gray-700 ${
                discount ? "line-through text-gray-500" : ""
              }`}
            >
              ${price}
            </span>
            {discount ? (
              <span className={`text-xl font-bold text-red-500`}>
                {discount ? "$" + discount : null}
              </span>
            ) : null}
          </div>
          <Link href={`/product/${slug}`}>
            <a className="px-3 py-2 text-xs font-bold">More {">"}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
