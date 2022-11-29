import Image from "next/image";
import ButtonLink from "@/elements/buttons/ButtonLink";
import ArrowRightIcon from "@/public/icons/arrow-right.svg";

const Collection = ({ image, align, content }) => {
  return (
    <div className="relative zoom-in">
      <div
        className={`absolute top-0 z-10 flex flex-col justify-center h-full px-24 ${
          { left: "left-0 items-start", right: "right-0 items-end" }[align]
        }`}
      >
        <h3
          className={`mb-6 text-4xl ${
            { left: "text-left", right: "text-right" }[align]
          } uppercase`}
        >
          <span className="font-bold">{content}</span>
          <br />
          Collection
        </h3>
        <ButtonLink
          variant="outlined-black"
          href="#"
          rounded="none"
          className=""
          icon={ArrowRightIcon}
        >
          Shop now
        </ButtonLink>
      </div>
      <div className="">
        <Image width={732} height={482} src={image} alt="Men's Collection" />
      </div>
    </div>
  );
};

export default Collection;
