import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const CloseReg = () => {
    console.log(window.location.pathname);
    dispatch({ type: "RegProcess" });
    history.push("/store");
  };
  const CreateAcc = (event) => {
    const par = event.target.parentElement.children;
    let NewAcc;
    if (
      par.item(1).value !== "" &&
      par.item(3).value !== "" &&
      par.item(5).value !== "" &&
      par.item(7).value !== "" &&
      par.item(9).value !== "" &&
      par.item(11).value !== ""
    ) {
      if (par.item(4).value === par.item(5).value) {
        NewAcc = {
          Name: par.item(1).value,
          Surname: par.item(2).value,
          Login: par.item(3).value,
          Password: par.item(4).value,
          ID: Math.random(),
          PicSrc: par.item(6).value,
        };
        dispatch({ type: "PushToAuthData", memb: NewAcc });
        par.item(7).style.backgroundColor = "green";
        par.item(7).textContent = "Succes";
        setTimeout(() => {
          history.push("/store");
        }, 3000);
      } else {
        for (let i = 7; i < 11; i++) {
          if (i % 2) {
            par.item(i).style.animation = "shake 0.5s";
            par.item(i).style.backgroundColor = "crimson";
            setTimeout(() => {
              par.item(i).style.animation = "none";
            }, 600);
            setTimeout(() => {
              par.item(i).style.backgroundColor = "white";
            }, 3000);
          } else {
            par.item(i).textContent = "Passwords must match";
            par.item(i).style.display = "inline";
            setTimeout(() => {
              par.item(i).style.display = "none";
              par.item(i).textContent = "Fill matched pole!";
            }, 3000);
          }
        }
      }
    } else {
      for (let i = 1; i < 13; i++) {
        if (i % 2) {
          par.item(i).style.animation = "shake 0.5s";
          par.item(i).style.backgroundColor = "crimson";
          setTimeout(() => {
            par.item(i).style.animation = "none";
          }, 600);
          setTimeout(() => {
            par.item(i).style.backgroundColor = "white";
          }, 3000);
        } else {
          par.item(i).style.display = "inline";
          setTimeout(() => {
            par.item(i).style.display = "none";
          }, 3000);
        }
      }
    }
  };
  return (
    <div className="Register">
      <h1 className="RegLbl">Register</h1>
      <input type="text" className="InputReg" placeholder="Name"></input>
      <label className="LblCaut">Fill matched pole!</label>
      <input type="text" className="InputReg" placeholder="SurName"></input>
      <label className="LblCaut">Fill matched pole!</label>
      <input type="text" className="InputReg" placeholder="Login"></input>
      <label className="LblCaut">Fill matched pole!</label>
      <input
        type="password"
        className="InputReg"
        placeholder="Password"
      ></input>
      <label className="LblCaut">Fill matched pole!</label>
      <input
        type="password"
        className="InputReg"
        placeholder="Confirm Password"
      ></input>
      <label className="LblCaut">Fill matched pole!</label>
      <input type="text" className="InputReg" placeholder="Avatar url"></input>
      <label className="LblCaut">Fill matched pole!</label>
      <button className="BTN" onClick={CreateAcc}>
        Confirm
      </button>
      <button className="BTN" onClick={CloseReg} to="/store">
        Back
      </button>
    </div>
  );
};
export default Register;
