import React from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export default function AuthPage(props) {
  const ChangeAuthSign = () => {
    props.toggleAuthMode("SignUp");
  };

  const ChangeAuthLog = () => {
    props.toggleAuthMode("LogIn");
  };

  return (
    <>
      <div className="container pt-4">
        <div className="header">
          <div className="text">{props.authMode}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {props.authMode === "LogIn" ? null : (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {props.authMode === "LogIn" ? (
          <>
            <div className="change-Page">
              Forget Password?
              <span> ClickHere!</span>
              <br />
              Don't have an account?
              <span onClick={ChangeAuthSign}> SignUp!</span>
            </div>
          </>
        ) : (
          <div className="change-Page">
            Already have an account?
            <span onClick={ChangeAuthLog}> LogIn!</span>
          </div>
        )}

        <div className="submit-container">
          <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
