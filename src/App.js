import React, { Fragment } from "react";
import "./App.css";
import Menu from "./components/Menu";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import ToolBar from "./components/ToolBar";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Cart />
      <Login />
      <Menu />
      <ToolBar />
      <ItemList />
    </div>
  );
};
export default App;
