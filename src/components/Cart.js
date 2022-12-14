import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const CartList = useSelector((state) => state.ItemsInCart);
  const dispatch = useDispatch();
  const CLoseModal = (event) => {
    const par = event.target.parentElement.parentElement.children;
    dispatch({ type: "ChangeCartVisibility" });
    par.item(0).className = "CartMod";
    setTimeout(() => {
      par.item(3).style.display = "none";
      par.item(0).style.display = "none";
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
        <button className="CloseBtnCart" onClick={CLoseModal}>
          X
        </button>
        <div className="CartBlock">
          <label className="CartLbl">Cart:</label>
          <div className="CartList">
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

        <div className="Information">
          <h3>Total: {sum} $</h3>
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
