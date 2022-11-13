import { createContext, useContext, useState } from "react";

const Context = createContext();

export const QueryContext = ({ children }) => {
  const [collection, setCollection] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [isSale, setIsSale] = useState(false);
  const [sort, setSort] = useState("");

  return (
    <Context.Provider
      value={{
        collection,
        setCollection,
        isNew,
        setIsNew,
        isSale,
        setIsSale,
        sort,
        setSort,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useQueryContext = () => useContext(Context);
