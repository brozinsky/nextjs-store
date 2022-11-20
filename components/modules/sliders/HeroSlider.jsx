import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import HeroSliderContent from "@/modules/sliders/HeroSliderContent";
import MenCollectionImage from "@/public/home/categories/men-collection.jpg";
import WomenCollectionImage from "@/public/home/categories/women-collection.jpg";

const heroSliderItems = [
  {
    id: 0,
    heading: "Lorem ipsum",
    paragraph: "Lorem ipsum dolor sit amet",
    image: MenCollectionImage,
    button: { href: "#", content: "Show" },
  },
  {
    id: 1,
    heading: "Consectetur adipisicing elit",
    paragraph:
      "Quas aut excepturi eligendi quis. Aut voluptates numquam dolorum dolore.",
    image: WomenCollectionImage,
    button: null,
  },
  {
    id: 2,
    heading: "Alias distinctio sint illo laboriosam quaerat",
    paragraph: "Ducimus impedit rerum laborum natus quasi accusantium ",
    image: WomenCollectionImage,
    button: null,
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log("swiper", swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {heroSliderItems.map(({ id, heading, paragraph, image, button }, i) => {
        return (
          <SwiperSlide key={id + i}>
            <HeroSliderContent
              heading={heading}
              paragraph={paragraph}
              button={button}
              image={image}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
