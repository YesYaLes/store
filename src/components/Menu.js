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
    setTimeout(() => {
      const par = event.target.parentElement.parentElement.children;
      if (CartVisibility === false) {
        document.body.style.overflowY = "hidden";
        par.item(0).style.display = "block";
        par.item(0).className = "Cart";
        par.item(3).style.display = "block";
        dispatch({ type: "ChangeCartVisibility" });
      }
    }, 100);
  };
  const LoginVisibilityHandler = (event) => {
    setTimeout(() => {
      const par = event.target.parentElement.parentElement.children;
      if (CartVisibility === false) {
        document.body.style.overflowY = "hidden";
        par.item(1).style.display = "block";
        par.item(1).className = "Login";
        par.item(3).style.display = "block";
        dispatch({ type: "ChangeCartVisibility" });
      }
    }, 100);
  };
  const Search = (event) => {
    history.push("/store");
    if (event.target.previousElementSibling.value !== "") {
      setTimeout(() => {
        const FilteredItems = ItemList.filter((list) => {
          return list.Name.toUpperCase().includes(
            event.target.previousElementSibling.value.toUpperCase()
          );
        });

        dispatch({ type: "FilterList", arr: FilteredItems });
      }, 100);
    }
  };
  return (
    <Fragment>
      <div className="Menu">
        <label className="NameLbl">Web Store</label>
        <div className="SearchBlck">
          <input
            type="text"
            className="InputMenu"
            placeholder="I`m looking for...."
          ></input>
          <button className="SearchBtn" onClick={Search}>
            Search
          </button>
        </div>

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
