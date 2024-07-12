import React from "react";
import { Card } from "./Card";
import styles from "./CardList.module.scss";
import { Sort } from "./Sort";

export const CardList = ({
  items,
  searchValue,
  onSearch,
  sortId,
  setSortId,
}) => {
  const [open, setOpen] = React.useState(false);

  const renderItems = () => {
    const filterItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    return filterItems.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        id={item.id}
        model={item.model}
        year={item.year}
        color={item.color}
        price={item.price}
        {...items}
      />
    ));
  };

  return (
    <div className={styles.content}>
      <div className={styles.search_block}>
        <div className={styles.search}>
          <img src="./search.svg" alt="search" />
          <input placeholder="Найти" onChange={onSearch} value={searchValue} />
        </div>

        <Sort
          open={open}
          setOpen={setOpen}
          value={sortId}
          onClickSort={(id) => setSortId(id)}
          items={items}
        />
      </div>

      <div className={styles.CardList}>{renderItems()}</div>
    </div>
  );
};
