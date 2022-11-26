import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./ItemList.css";
import Item from "./Item";
const ItemList = () => {
  const FilteredItems = useSelector((state) => state.FilteredItemList);
  return (
    <Fragment>
      <div className="ItemList">
        {FilteredItems.map((item) => (
          <Item
            className="Item"
            Name={item.Name}
            Cost={item.Cost}
            key={item.Id}
            Id={item.Id}
            src={item.src}
          ></Item>
        ))}
      </div>
    </Fragment>
  );
};

export default ItemList;
