import React from "react";
import styles from "./Sort.module.scss";

export const Sort = ({ value, onClickSort, open, setOpen }) => {
  const list = [
    { title: "По стоимости (ниже)", sort: "priceMin" },
    { title: "По стоимости (выше)", sort: "priceMax" },
    { title: "По году выпуска(сначала новые)", sort: "yearMax" },
    { title: "По году выпуска(сначала старые)", sort: "yearMin" },
  ];

  const onSortItems = (obj) => {
    onClickSort(obj);
    setOpen(!open);
  };

  return (
    <div className={styles.sort} onClick={() => setOpen(!open)}>
      <div className={styles.sort_pop}>
        <p>Сортировка:</p>
        <span>{value.title}</span>

        <ul style={{ display: `${open ? "block" : "none"}` }}>
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
