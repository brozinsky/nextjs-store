import CollectionCategories from "@/modules/sections/categories/CollectionCategories";
import ProductCategories from "@/modules/sections/categories/ProductCategories";
import SectionDivider from "@/elements/decoration/SectionDivider";
import NewProductsSection from "@/modules/sections/NewProductsSection";

const HomeTemplate = () => {
  return (
    <>
      <CollectionCategories />
      <ProductCategories />
      <SectionDivider align="left" />
      <NewProductsSection />
      <SectionDivider align="right" />
    </>
  );
};

export default HomeTemplate;
