import React from "react";
import styles from "./App.module.scss";
import axios from "axios";
import { CardList } from "./CardList";

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [sortId, setSortId] = React.useState({
    name: "По цене (ниже)",
    sort: "price",
  });

  React.useEffect(() => {
    async function fetchData() {
      //............................................... Items ...............................................
      const itemsResponce = await axios.get(
        "https://test.tspb.su/test-task/vehicles"
      );
      setItems(itemsResponce.data);
    }
    fetchData();
  }, []);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const sortItems = (a, b) => {

    if (sortId.sort === "priceMin") {
      return a.price - b.price;
    }

    if (sortId.sort === "priceMax") {
      return b.price - a.price;
    }

    if (sortId.sort === "yearMin") {
      return a.year - b.year;
    }

    if (sortId.sort === "yearMax") {
      return b.year - a.year;
    }
  };

  return (
    <div className="App">
      <body className={styles.body}>
        <CardList
          items={items.sort(sortItems)}
          searchValue={searchValue}
          onSearch={onSearch}
          sortId={sortId}
          setSortId={setSortId}
        />
      </body>
    </div>
  );
};
