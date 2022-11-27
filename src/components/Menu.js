import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Menu.css";
import cart from "./3081822.png";
import prvt from "./images.png";

const Menu = () => {
  const CartVisibility = useSelector((state) => state.CartVisible);
  const CartList = useSelector((state) => state.ItemsInCart);
  const ItemList = useSelector((state) => state.FilteredItemList);
  const Logged = useSelector((state) => state.IsLoged);
  const pic = useSelector((state) => state.Pic);
  const dispatch = useDispatch();

  const CartVisibilityHandler = (event) => {
    const par = event.target.parentElement.parentElement.children;
    if (CartVisibility === false) {
      document.body.style.overflowY = "hidden";
      par.item(0).style.display = "block";
      par.item(0).className = "Cart";
      par.item(2).className = "MenuBlur";
      par.item(2).style.pointerEvents = "none";
      par.item(3).className = "ToolBarBlur";
      par.item(4).className = "ItemListBlur";

      dispatch({ type: "ChangeCartVisibility" });
    }
  };
  const LoginVisibilityHandler = (event) => {
    const par = event.target.parentElement.parentElement.children;
    if (CartVisibility === false) {
      document.body.style.overflowY = "hidden";
      par.item(1).style.display = "block";
      par.item(1).className = "Login";
      par.item(2).className = "MenuBlur";
      par.item(2).style.pointerEvents = "none";
      par.item(3).className = "ToolBarBlur";
      par.item(4).className = "ItemListBlur";
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
        <label className="NumberOfItems">{CartList.length}</label>
        <img
          src={Logged ? pic : prvt}
          alt="Cart"
          width="45"
          height="45"
          className="PrvtOff"
          onClick={Logged ? console.log(Logged) : LoginVisibilityHandler}
        />
        <img
          src={cart}
          alt="Cart"
          width="45"
          height="45"
          className="CartBtn"
          onClick={CartVisibilityHandler}
        />
      </div>
    </Fragment>
  );
};

export default Menu;
