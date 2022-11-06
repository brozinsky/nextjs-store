import { useState } from "react";
import Select from "@/elements/buttons/Select";
// import filterSearch from "@/utils/filterSearch";
import { PRODUCT_QUERY } from "@/lib/query";
import { PRODUCT_SORT_PRICE_DESC_QUERY } from "@/lib/query";
import { PRODUCT_SORT_PRICE_ASC_QUERY } from "@/lib/query";
import { PRODUCT_FILTER_SALE_QUERY } from "@/lib/query";
import { PRODUCT_FILTER_NEW_QUERY } from "@/lib/query";
import { PRODUCT_FILTER_COLLECTION_MEN_QUERY } from "@/lib/query";
import { PRODUCT_FILTER_COLLECTION_WOMEN_QUERY } from "@/lib/query";

const optionsSort = [
  { name: "All", value: "" },
  { name: "New", value: "new" },
  { name: "On sale", value: "sale" },
  { name: "Price ⬇", value: "price-desc" },
  { name: "Price ⬆", value: "price-asc" },
];

const optionsCollection = [
  { name: "All", value: "" },
  { name: "Men", value: "men" },
  { name: "Women", value: "women" },
];

const Filter = ({ setQuery }) => {
  const [sort, setSort] = useState("");
  const [collection, setCollection] = useState("");

  const handleCollection = (e) => {
    setCollection(e.target.value);
    switch (e.target.value) {
      case "men":
        setQuery(PRODUCT_FILTER_COLLECTION_MEN_QUERY);
        break;
      case "women":
        setQuery(PRODUCT_FILTER_COLLECTION_WOMEN_QUERY);
        break;
      default:
        setQuery(PRODUCT_QUERY);
        break;
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    switch (e.target.value) {
      case "price-asc":
        setQuery(PRODUCT_SORT_PRICE_ASC_QUERY);
        break;
      case "price-desc":
        setQuery(PRODUCT_SORT_PRICE_DESC_QUERY);
        break;
      case "new":
        setQuery(PRODUCT_FILTER_NEW_QUERY);
        break;
      case "sale":
        setQuery(PRODUCT_FILTER_SALE_QUERY);
        break;
      default:
        setQuery(PRODUCT_QUERY);
        break;
    }
  };

  return (
    <div className="flex justify-end w-full input-group">
      <div className="px-0 mt-2 input-group-prepend col-md-2">
        {/* <Select
          options={optionsCollection}
          value={collection}
          onChange={handleCollection}
        /> */}
        <Select options={optionsSort} value={sort} onChange={handleSort} />
      </div>
    </div>
  );
};

export default Filter;
