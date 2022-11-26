import React, { Fragment } from "react";
import "./App.css";
import Menu from "./components/Menu";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import ToolBar from "./components/ToolBar";
const App = () => {
  return (
    <Fragment>
      <Cart />
      <Menu />
      <ToolBar />
      <ItemList />
    </Fragment>
  );
};
export default App;
