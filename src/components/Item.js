import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ViewMore = (event) => {
    const CurItem = {
      Name: props.Name,
      Cost: props.Cost,
      src: props.src,
      Id: props.Id,
    };
    dispatch({ type: "PushToCurItem", value: CurItem });
    history.push(`/store/:${props.Id}`);
  };
  return (
    <div className="Item">
      <h3 className="NameOfItem">{props.Name}</h3>
      <img src={props.src} className="Image"></img>
      <h4 className="CostLbl">Cost: {props.Cost} $</h4>
      <button className="ButtonBuy" onClick={ViewMore}>
        View more
      </button>
    </div>
  );
};
export default Item;
