import Image from "next/image";
import ButtonLink from "@/elements/buttons/ButtonLink";

const Category = ({ content, image, icon }) => {
  return (
    <div className="relative category">
      <div className="category__overflow"></div>
      <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-end w-full h-full px-24">
        <div className="flex flex-col items-center gap-2 category__button">
          <Image
            className="filter-white"
            width={50}
            height={50}
            src={icon}
            alt={content}
          />
          <ButtonLink
            variant="outlined-white"
            color="white"
            rounded="none"
            href="#"
          >
            Show
          </ButtonLink>
        </div>
        <h3 className="mb-6 text-4xl text-center text-white uppercase">
          {content}
        </h3>
      </div>
      <div className="">
        <Image width={732} height={482} src={image} alt={content} />
      </div>
    </div>
  );
};

export default Category;
