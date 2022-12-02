import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Item.css";

const Item = (props) => {
  const CartVisibility = useSelector((state) => state.CartVisible);
  const ItemList = useSelector((state) => state.Items);

  const dispatch = useDispatch();
  const AddToCart = (event) => {
    for (let i = 0; i < ItemList.length; i++) {
      if (ItemList[i].Id === props.Id) {
        dispatch({ type: "PushToCartList", memb: ItemList[i] });
      }
    }
    const par = event.target.parentElement.parentElement.parentElement.children;
    if (CartVisibility === false) {
      document.body.style.overflowY = "hidden";
      par.item(3).style.display = "block";
      par.item(0).style.display = "block";
      par.item(0).className = "Cart";
      dispatch({ type: "ChangeCartVisibility" });
    }
  };
  return (
    <div className="Item">
      <h3 className="NameOfItem">{props.Name}</h3>
      <img src={props.src} className="Image"></img>
      <h4 className="CostLbl">Cost: {props.Cost} $</h4>
      <button className="ButtonBuy" onClick={AddToCart}>
        Add to cart
      </button>
    </div>
  );
};
export default Item;
