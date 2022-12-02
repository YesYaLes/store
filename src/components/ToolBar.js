import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ToolBar.css";

const ToolBar = () => {
  const ItemList = useSelector((state) => state.Items);
  const maxValueOfCost = useSelector((state) => state.maxCost);
  const minValueOfCost = useSelector((state) => state.minCost);
  let curFromVal = useSelector((state) => state.curFromVal);
  let curTillVal = useSelector((state) => state.curTillVal);
  const dispatch = useDispatch();
  const [valueFrom, changeValueFrom] = useState(minValueOfCost);
  const [valueTill, changeValueTill] = useState(maxValueOfCost);

  useEffect(() => {
    let min = ItemList[0].Cost;
    let max = ItemList[0].Cost;
    for (let i = 0; i < ItemList.length; i++) {
      if (ItemList[i].Cost < min) min = ItemList[i].Cost;
      if (ItemList[i].Cost > max) max = ItemList[i].Cost;
    }
    dispatch({ type: "GetMinCost", value: min });
    dispatch({ type: "GetMaxCost", value: max });
    dispatch({ type: "FilterList", arr: ItemList });
  });
  const Sort = () => {
    const FilteredItems = ItemList.filter((list) => {
      return (
        list.Cost >= (curFromVal > 0 ? curFromVal : minValueOfCost) &&
        list.Cost <= (curTillVal > 0 ? curTillVal : maxValueOfCost)
      );
    });
    dispatch({ type: "FilterList", arr: FilteredItems });
  };
  const ChangingValFrom = (event) => {
    if (event.target.value + 10 <= (curTillVal > 0 ? curTillVal : 100000000)) {
      changeValueFrom(event.target.value);
      dispatch({ type: "ChangeValFrom", value: event.target.value });
    }
  };
  const ChangingValTill = (event) => {
    if (event.target.value - 10 >= (curFromVal > 0 ? curFromVal : -1)) {
      changeValueTill(event.target.value);
      dispatch({ type: "ChangeValTill", value: event.target.value });
    }
  };
  const EnterMouse = (event) => {
    const labels = event.target.children;
    for (let memb of labels) {
      switch (memb.className) {
        case "NumOfCost": {
          memb.style.display = "inline-block";
          break;
        }
        case "RangeOfCost": {
          memb.style.display = "inline-block";
          break;
        }
        case "Val": {
          memb.style.display = "inline-block";
          break;
        }
        case "SortBtn": {
          memb.style.display = "inline-block";
          break;
        }

        default: {
          break;
        }
      }
    }
  };
  const LeaveMouse = (event) => {
    const labels = event.target.children;
    for (let memb of labels) {
      switch (memb.className) {
        case "NumOfCost": {
          memb.style.display = "none";
          break;
        }
        case "RangeOfCost": {
          memb.style.display = "none";
          break;
        }
        case "Val": {
          memb.style.display = "none";
          break;
        }
        case "SortBtn": {
          memb.style.display = "none";
          break;
        }
        default: {
          break;
        }
      }
    }
  };
  return (
    <div
      className="ToolBar"
      onMouseEnter={EnterMouse}
      onMouseLeave={LeaveMouse}
    >
      <label className="labelTool">Cost</label>
      <Fragment>
        <h3 className="CostLabel">
          From: {curFromVal > 0 ? curFromVal : minValueOfCost} $
        </h3>
        <br></br>
        <h4 className="Val">{minValueOfCost} $</h4>
        <input
          type="range"
          min={minValueOfCost}
          max={maxValueOfCost}
          step="10"
          className="RangeOfCost"
          value={valueFrom > 0 ? valueFrom : minValueOfCost}
          onChange={ChangingValFrom}
          id="from"
        ></input>
        <h4 className="Val">{maxValueOfCost} $</h4>
      </Fragment>

      <Fragment>
        <h3 className="CostLabel">
          Till: {curTillVal > 0 ? curTillVal : maxValueOfCost} $
        </h3>
        <br></br>
        <h4 className="Val">{minValueOfCost} $</h4>
        <input
          type="range"
          min={minValueOfCost}
          max={maxValueOfCost}
          step="10"
          className="RangeOfCost"
          onChange={ChangingValTill}
          value={valueTill > 0 ? valueTill : maxValueOfCost}
          id="till"
        ></input>
        <h4 className="Val">{maxValueOfCost} $</h4>
      </Fragment>
      <br></br>
      <button className="SortBtn" onClick={Sort}>
        SORT
      </button>
    </div>
  );
};

export default ToolBar;
