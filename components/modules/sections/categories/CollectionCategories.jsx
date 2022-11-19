import WomenCollectionImage from "@/public/home/categories/women-collection.jpg";
import MenCollectionImage from "@/public/home/categories/men-collection.jpg";
import Collection from "@/modules/Collection";

const CollectionCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Collection
        content="Women's"
        align="right"
        image={WomenCollectionImage}
      />
      <Collection content="Men's" align="left" image={MenCollectionImage} />
    </div>
  );
};

export default CollectionCategories;
