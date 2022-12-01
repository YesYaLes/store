import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const AuthData = useSelector((state) => state.AuthData);
  const CLoseModal = (event) => {
    const par = event.target.parentElement.parentElement.children;
    par.item(2).className = "Menu";
    par.item(3).className = "ToolBar";
    par.item(4).className = "ItemList";
    par.item(1).className = "LoginMod";
    par.item(2).style.pointerEvents = "none";
    setTimeout(() => {
      par.item(1).style.display = "none";
      par.item(2).style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
    }, 750);
    par.item(1).children.item(3).value = "";
    par.item(1).children.item(4).value = "";
  };
  const CheckData = (event) => {
    const par1 = event.target.parentElement.children;
    AuthData.forEach((element) => {
      if (
        par1.item(3).value === element.Login &&
        par1.item(4).value === element.Password
      ) {
        dispatch({ type: "LogIn" });
        dispatch({ type: "SetPic", value: element.PicSrc });
        const par = event.target.parentElement.parentElement.children;
        par.item(2).className = "Menu";
        par.item(3).className = "ToolBar";
        par.item(4).className = "ItemList";
        par.item(1).className = "LoginMod";
        par.item(2).style.pointerEvents = "none";
        setTimeout(() => {
          par.item(1).style.display = "none";
          par.item(2).style.pointerEvents = "auto";
          document.body.style.overflow = "auto";
        }, 750);

        par1.item(3).value = "";
        par1.item(4).value = "";
      } else {
        par1.item(3).style.animation = "shake 0.5s";
        par1.item(4).style.animation = "shake 0.5s";
        setTimeout(() => {
          par1.item(3).style.animation = "none";
          par1.item(4).style.animation = "none";
        }, 600);
        par1.item(3).style.backgroundColor = "crimson";
        par1.item(4).style.backgroundColor = "crimson";
        setTimeout(() => {
          par1.item(3).style.backgroundColor = "white";
          par1.item(4).style.backgroundColor = "white";
        }, 3000);
      }
    });
  };
  const EnterReg = (event) => {
    dispatch({ type: "RegProcess" });
    const par = event.target.parentElement.parentElement.children;
    par.item(2).className = "Menu";
    par.item(3).className = "ToolBar";
    par.item(4).className = "ItemList";
    par.item(1).className = "LoginMod";
    par.item(2).style.pointerEvents = "none";
    setTimeout(() => {
      par.item(1).style.display = "none";
      par.item(2).style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
      history.push("/register");
    }, 500);
  };
  return (
    <Fragment>
      <div style={{ display: "none" }} className="Login">
        <button className="CloseBtnLog" onClick={CLoseModal}>
          X
        </button>
        <label className="LblLogin">Log in your account</label>
        <hr className="HrLine" style={{ top: "15%" }}></hr>
        <input
          type="text"
          className="LoginPole"
          placeholder="Your Login"
        ></input>
        <input
          type="password"
          className="PasswordPole"
          placeholder="Your password"
        ></input>
        <button className="ContinueBtn" onClick={CheckData}>
          {" "}
          Continue{" "}
        </button>
        <label className="LblReg">Haven`t got account?</label>
        <button className="BtnReg" onClick={EnterReg} to="/register">
          Register
        </button>
      </div>
    </Fragment>
  );
};
export default Login;
