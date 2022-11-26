import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const CartList = useSelector((state) => state.ItemsInCart);
  const dispatch = useDispatch();
  const CLoseModal = (event) => {
    const par = event.target.parentElement;

    par.nextElementSibling.className = "Menu";
    par.nextElementSibling.nextElementSibling.className = "ToolBar";
    par.nextElementSibling.nextElementSibling.nextElementSibling.className =
      "ItemList";
    dispatch({ type: "ChangeCartVisibility" });
    par.className = "CartMod";
    par.nextElementSibling.style.pointerEvents = "none";
    setTimeout(() => {
      par.style.display = "none";
      par.nextElementSibling.style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
    }, 750);
  };
  let sum = 0;
  for (let i = 0; i < CartList.length; i++) {
    sum = sum + CartList[i].Cost;
  }

  return (
    <Fragment>
      <div style={{ display: "none" }} className="Cart">
        <button className="CloseBtn" onClick={CLoseModal}>
          X
        </button>

        <div className="Information">
          <h3>Total: {sum} $</h3>
        </div>
        <div className="back"></div>
        <div className="CartBlock">
          <label className="CartLbl">Cart:</label>
          {CartList.map((item) => (
            <CartItem
              src={item.src}
              className="Item"
              Name={item.Name}
              Cost={item.Cost}
              key={Math.random()}
              Id={item.Id}
            ></CartItem>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;