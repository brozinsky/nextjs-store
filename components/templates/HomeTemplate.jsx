HeroSlider;
import HeroSlider from "@/modules/sliders/HeroSlider";
import CollectionCategories from "@/modules/sections/categories/CollectionCategories";
import ProductCategories from "@/modules/sections/categories/ProductCategories";
import SectionDivider from "@/elements/decoration/SectionDivider";
import NewProductsSection from "@/modules/sections/NewProductsSection";
import NewsletterColumn from "@/modules/newsletters/NewsletterColumn";
import NewsletterRow from "@/modules/newsletters/NewsletterRow";

const HomeTemplate = () => {
  return (
    <>
      <HeroSlider />
      <CollectionCategories />
      <ProductCategories />
      <SectionDivider align="left" />
      <NewProductsSection />
      <SectionDivider align="right" />
      <NewsletterColumn />
    </>
  );
};

export default HomeTemplate;
