import React from "react";
import styles from "./Sort.module.scss";

export const Sort = ({ items, value, onClickSort, open, setOpen }) => {
const [active, setActive] = React.useState(false)

  const list = [
    { title: "По алфавиту", sort: "name" },
    { title: "По цене (ниже)", sort: "price" },
    { title: "По цене (выше)", sort: "price" },
    { title: "По году выпуска(сначала новые)", sort: "year" },
    { title: "По году выпуска(сначала старые)", sort: "year" },
  ];

  const onSortItems = (obj) => {
    onClickSort(obj);
    setOpen(!open);
  };

  const onSelected = () => {
    setActive(!active)

  }

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
            <li key={i} onClick={onSortItems} 
            className={value.sort === obj.sort ? 'active' : ''}
            // className={() => onSelected}
            >
              {obj.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
