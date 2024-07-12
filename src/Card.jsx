import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ name, id, model, year, color, price }) => {
  return (
    <div className={styles.item}>
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
        Цвет: <b>{color}</b>
      </p>
      <div>
        <p>
          Цена: <b>{price} руб.</b>
        </p>
      </div>
    </div>
  );
};
