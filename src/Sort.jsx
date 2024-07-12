import React from "react";
import styles from "./Sort.module.scss";

export const Sort = ({ value, onClickSort, open, setOpen }) => {
  const list = [
    { title: "По цене (ниже)", sort: "priceMin" },
    { title: "По цене (выше)", sort: "priceMax" },
    { title: "По году выпуска(сначала новые)", sort: "yearMax" },
    { title: "По году выпуска(сначала старые)", sort: "yearMin" },
  ];

  const onSortItems = (obj) => {
    onClickSort(obj);
    setOpen(!open);
  };

  return (
    <div className={styles.sort}>
      <p onClick={() => setOpen(!open)}>Сортировка по:</p>
      <span>{value.title}</span>
      <div
        className={styles.sort_pop}
        style={{ display: `${open ? "block" : "none"}` }}
      >
        <ul>
          {list.map((obj, i) => (
            <li
              key={i}
              onClick={() => onSortItems(obj)}
              className={value.sort === obj.sort ? "active" : ""}
            >
              {obj.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
