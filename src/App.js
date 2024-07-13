import React from "react";
import styles from "./App.module.scss";
import axios from "axios";
import { CardList } from "./components/CardList/CardList";

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [sortId, setSortId] = React.useState({
    name: "По стоимости (ниже)",
    sort: "price",
  });
  const [formVisible, setFormVisible] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponce = await axios.get(
        "https://test.tspb.su/test-task/vehicles"
      );
      setItems(itemsResponce.data);
    }
    fetchData();
  }, []);

  // const onAddToCard = (obj) => {
  //   return setItems((prev) => [...prev, obj]);
  // };

  const onRemoveCard = (id) => {
    return setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onVisible = () => {
    setFormVisible(!formVisible);
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
          onVisible={onVisible}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          onRemoveCard={onRemoveCard}
        />
      </body>
    </div>
  );
};
