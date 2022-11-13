import Select from "@/elements/buttons/Select";
import { useQueryContext } from "@/contexts/QueryContext";

const optionsSort = [
  { name: "Sort", value: "" },
  { name: "Price ⬇", value: "price:desc" },
  { name: "Price ⬆", value: "price:asc" },
];

const optionsCollection = [
  { name: "All", value: "" },
  { name: "Men", value: "men" },
  { name: "Women", value: "women" },
];

const Filter = () => {
  const {
    collection,
    setCollection,
    isNew,
    setIsNew,
    isSale,
    setIsSale,
    sort,
    setSort,
  } = useQueryContext();

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="flex justify-end w-full input-group">
      <div className="px-0 mt-2 input-group-prepend col-md-2">
        <div className="flex flex-row items-center justify-between gap-4">
          <label className="flex flex-row items-center gap-2 cursor-pointer">
            New
            <input
              className="cursor-pointer"
              value={isNew}
              checked={isNew}
              type="checkbox"
              name="new"
              onChange={() => setIsNew(!isNew)}
            />
          </label>
          <label className="flex flex-row items-center gap-2 cursor-pointer">
            Sale
            <input
              className="cursor-pointer"
              value={isSale}
              checked={isSale}
              type="checkbox"
              name="sale"
              onChange={() => setIsSale(!isSale)}
            />
          </label>
          <Select
            options={optionsCollection}
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
          />
          <Select options={optionsSort} value={sort} onChange={handleSort} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
