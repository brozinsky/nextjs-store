import { useState } from "react";
import Select from "@/elements/buttons/Select";
// import filterSearch from "@/utils/filterSearch";
import { PRODUCT_QUERY } from "@/lib/query";
import { PRODUCT_SORT_PRICE_DESC_QUERY } from "@/lib/query";
import { PRODUCT_SORT_PRICE_ASC_QUERY } from "@/lib/query";

const options = [
  { name: "Sort", value: "default" },
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Price ⬇", value: "price-desc" },
  { name: "Price ⬆", value: "price-asc" },
];

const Filter = ({ setQuery }) => {
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    setSort(e.target.value);
    switch (e.target.value) {
      case "price-asc":
        setQuery(PRODUCT_SORT_PRICE_ASC_QUERY);
        break;
      case "price-desc":
        setQuery(PRODUCT_SORT_PRICE_DESC_QUERY);
        break;
      default:
        setQuery(PRODUCT_QUERY);
        break;
    }
  };

  return (
    <div className="flex justify-end w-full input-group">
      <div className="px-0 mt-2 input-group-prepend col-md-2">
        <Select options={options} value={sort} onChange={handleSort} />
      </div>
    </div>
  );
};

export default Filter;
