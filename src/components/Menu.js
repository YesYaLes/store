import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Menu.css";
import cart from "./3081822.png";

const Menu = () => {
  const CartVisibility = useSelector((state) => state.CartVisible);
  const CartList = useSelector((state) => state.ItemsInCart);
  const ItemList = useSelector((state) => state.FilteredItemList);
  const dispatch = useDispatch();

  const VisibilityHandler = (event) => {
    console.log(CartList);
    const par = event.target.parentElement;
    if (CartVisibility === false) {
      document.body.style.overflowY = "hidden";

      par.previousElementSibling.style.display = "block";

      par.previousElementSibling.className = "Cart";
      par.className = "MenuBlur";
      par.nextElementSibling.className = "ToolBarBlur";
      par.nextElementSibling.nextElementSibling.className = "ItemListBlur";
      dispatch({ type: "ChangeCartVisibility" });
    }
  };
  const Search = (event) => {
    const FilteredItems = ItemList.filter((list) => {
      return list.Name.toUpperCase().includes(
        event.target.previousElementSibling.value.toUpperCase()
      );
    });

    dispatch({ type: "FilterList", arr: FilteredItems });
  };
  return (
    <Fragment>
      <div className="Menu">
        <label className="NameLbl">Web Store</label>
        <input
          type="text"
          className="InputMenu"
          placeholder="I`m looking for...."
        ></input>
        <button className="SearchBtn" onClick={Search}>
          Search
        </button>
        <img
          src={cart}
          alt="Cart"
          width="45"
          height="45"
          className="CartBtn"
          onClick={VisibilityHandler}
        />
        <label className="NumberOfItems">{CartList.length}</label>
      </div>
    </Fragment>
  );
};

export default Menu;
