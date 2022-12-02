import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import ToolBar from "./components/ToolBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Blur from "./components/Blur";
const App = () => {
  return (
    <div>
      <Cart />
      <Login />
      <Menu />
      <Blur />
      <Route path="/store">
        <ToolBar />
        <ItemList />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
};
export default App;
