import React from "react";
import styles from "./../Form/Form.module.scss";

export const Form = ({
  name,
  id,
  model,
  year,
  color,
  price,
  onVisible,
  formVisible,
}) => {
  return (
    <div
      className={styles.form}
      style={{ display: `${formVisible ? "block" : "none"}` }}
    >
      <div className={styles.buttoncontainer} onClick={onVisible}>
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

      <p>
        Марка:{" "}
        <strong>
          <input placeholder="Марка" />
        </strong>
      </p>
      <p>Id: {id} </p>
      <p>
        Модель: <input placeholder="Модель" />
      </p>
      <p>Год выпуска: {year}</p>
      <p>Цвет: {color}</p>
      <div>
        <p>
          Стоимость: <input placeholder="Cтоимость" />
        </p>
      </div>
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton}>Сохранить</button>
      </div>
    </div>
  );
};
