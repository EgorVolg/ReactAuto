import React from "react";
import styles from "./Card.module.scss";

export const Card = ({
  name,
  id,
  model,
  year,
  color,
  price,
  onRemoveCard,
  onClickItem,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.buttoncontainer}>
        <div
          className={styles.settingCardSvg}
          onClick={(item) => onClickItem(item)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="none"
              stroke="none"
            />
            <path
              d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div
          className={styles.removeCardSvg}
          onClick={(id) => onRemoveCard(id)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="none"
              stroke="wheat"
            />
            <path
              d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <p>
        Марка: <strong>{name}</strong>
      </p>
      <p>
        Id: <b>{id}</b>
      </p>
      <p>
        Модель: <b>{model}</b>
      </p>
      <p>
        Год выпуска: <b>{year}</b>
      </p>
      <p>
        Цвет: <b style={{ color: `${color}` }}>{color}</b>
      </p>
      <div>
        <p>
          Стоимость: <b>{price} руб.</b>
        </p>
      </div>
    </div>
  );
};
