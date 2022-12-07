import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
import trash from "../images/6182628.png";
const CartItem = (props) => {
  const CartList = useSelector((state) => state.ItemsInCart);
  const dispatch = useDispatch();
  const DeleteFromList = () => {
    for (let i = 0; i < CartList.length; i++) {
      if (CartList[i].Id === props.Id) {
        CartList.splice(i, 1);
        dispatch({ type: "DeleteFromCartList", arr: CartList });
      }
    }
  };
  return (
    <div className="CartItem">
      <h3 className="Name">{props.Name}</h3>
      <img
        src={props.src}
        alt="image"
        width="120"
        height="120"
        className="Pic"
      />
      <div className="InfItem">
        <h4 className="Cost">{props.Cost} $</h4>
        <img
          src={trash}
          alt="Trash"
          onClick={DeleteFromList}
          className="DelBtn"
        />
      </div>
    </div>
  );
};
export default CartItem;
