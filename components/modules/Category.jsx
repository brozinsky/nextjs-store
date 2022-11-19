import Image from "next/image";
import ButtonLink from "@/elements/buttons/ButtonLink";

const Category = ({ content, image }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full px-24">
        <h3 className="mb-6 text-4xl text-center text-white uppercase">
          {content}
        </h3>
        <ButtonLink href="#">Show</ButtonLink>
      </div>
      <div className="">
        <Image width={732} height={482} src={image} alt="Men's Collection" />
      </div>
    </div>
  );
};

export default Category;
