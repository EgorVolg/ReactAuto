import React from "react";
import styles from "./App.module.scss";
import axios from "axios";
import { CardList } from "./components/CardList/CardList";

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [sortId, setSortId] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponce = await axios.get(
        "https://test.tspb.su/test-task/vehicles"
      );
      setItems(itemsResponce.data);
    }
    fetchData();
  }, []);

  const onRemoveCard = (id) => {
    return setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSettingCard = (item) => {
    const newItems = items.map((el) => (el.id === item.id ? item : el));
    setItems(newItems);
  };

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
      <div className={styles.body}>
        <CardList
          items={items.sort(sortItems)}
          onRemoveCard={onRemoveCard}
          searchValue={searchValue}
          onSearch={onSearch}
          sortId={sortId}
          setSortId={setSortId}
          onSettingCard={onSettingCard}
        />
      </div>
    </div>
  );
};
