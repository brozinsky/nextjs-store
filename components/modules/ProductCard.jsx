import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { title, description, image, price, slug } = product.attributes;
  const { url, width, height } = image.data.attributes.formats.thumbnail;
  return (
    <div className="flex max-w-md m-4 overflow-hidden bg-white rounded-lg shadow-lg">
      <Link href={`/product/${slug}`}>
        <Image className="cursor-pointer" src={url} width={width} height={height} alt={title} />
      </Link>
      <div className="w-2/3 p-4">
        <div>Category</div>
        <Link href={`/product/${slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 cursor-pointer">{title}</h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold text-gray-700">${price}</h1>
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
