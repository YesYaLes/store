import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ItemDetail.css";
const ItemDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Item = useSelector((state) => state.CurItem);
  const CartVisibility = useSelector((state) => state.CartVisible);
  const Return = () => {
    history.push("/store");
  };
  const AddToCart = (event) => {
    dispatch({ type: "PushToCartList", memb: Item });
    const par = event.target.parentElement.parentElement.children;
    if (CartVisibility === false) {
      document.body.style.overflowY = "hidden";
      par.item(3).style.display = "block";
      par.item(0).style.display = "block";
      par.item(0).className = "Cart";
      dispatch({ type: "ChangeCartVisibility" });
    }
  };
  return (
    <div className="ItemDetail">
      <div className="Visual">
        <h3 className="DetName">{Item.Name}</h3>
        <img src={Item.src} className="DetImg"></img>
        <h4 className="DetCost"> {Item.Cost} $</h4>
      </div>
      <div className="Interaction">
        <button className="DetBuy" onClick={AddToCart}>
          Purchase
        </button>
        <button onClick={Return} className="DetBack">
          Back
        </button>
      </div>
    </div>
  );
};
export default ItemDetail;
