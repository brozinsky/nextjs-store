import Image from "next/image";
import ButtonLink from "@/elements/buttons/ButtonLink";

const HeroSliderContent = ({ heading, paragraph, image, button }) => {
  return (
    <div className="relative select-none">
      <Image width={1464} height={600} src={image} alt={heading} />
      <div className="absolute top-64 left-20">
        <h1 className="mb-6 uppercase text-8xl">{heading}</h1>
        <p className="mb-6 text-4xl uppercase">
          {paragraph ? paragraph : null}
        </p>
        {button ? (
          <ButtonLink size="xl" href={button.href}>
            {button.content}
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderContent;
