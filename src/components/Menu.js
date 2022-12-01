import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Menu.css";
import cart from "../images/3081822.png";
import prvt from "../images/images.png";

const Menu = () => {
  const history = useHistory();
  const CartVisibility = useSelector((state) => state.CartVisible);
  const CartList = useSelector((state) => state.ItemsInCart);
  const ItemList = useSelector((state) => state.FilteredItemList);
  const Logged = useSelector((state) => state.IsLoged);
  const pic = useSelector((state) => state.Pic);
  const RegPr = useSelector((state) => state.RegInProcess);
  const dispatch = useDispatch();

  const CartVisibilityHandler = (event) => {
    history.push("/store");
    setTimeout(() => {
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
    }, 100);
  };
  const LoginVisibilityHandler = (event) => {
    history.push("/store");
    setTimeout(() => {
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
    }, 100);
  };
  const Search = (event) => {
    history.push("/store");
    setTimeout(() => {
      const FilteredItems = ItemList.filter((list) => {
        return list.Name.toUpperCase().includes(
          event.target.previousElementSibling.value.toUpperCase()
        );
      });

      dispatch({ type: "FilterList", arr: FilteredItems });
    }, 100);
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
          onClick={
            Logged || window.location.pathname === "/register"
              ? console.log(Logged)
              : LoginVisibilityHandler
          }
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
