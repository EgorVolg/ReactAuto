import React from "react";
import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";
import { Sort } from "../Sort/Sort";
import { Form } from "../Form/Form";

export const CardList = ({
  items,
  searchValue,
  onSearch,
  sortId,
  setSortId,
  onRemoveCard,
  onSettingCard,
}) => {
  const [open, setOpen] = React.useState(false);

  const [formVisible, setFormVisible] = React.useState(false);

  const [formState, setFormState] = React.useState({
    name: "Марка",
    model: "Moдель",
    price: "Стоимость",
  });



  const onClickItem = (item) => {
    setFormState(item);
    setFormVisible(!formVisible);
  };

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
        formVisible={formVisible}
        onClickItem={() => onClickItem(item)}
        onRemoveCard={() => onRemoveCard(item.id)}
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
        <Form
          formVisible={formVisible}
          item={formState}
          formState={formState}
          setFormState={setFormState}
          onSettingCard={(item) => onSettingCard(item)}
          onClickItem={(item) => onClickItem(item)}
        />
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
