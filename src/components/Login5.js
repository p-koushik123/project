import React from "react";
import "./login5.css";
import { useState } from "react";
import { useTheme } from "./themeContext";
export default function Login5({children}) {
  const [k1, setk1] = useState("slider");
  const [k2, setk2] = useState("form-section");
  const hand = () => {
    setk1("slider");
    setk2("form-section");
  };
  const hand1 = () => {
    setk1("slider moveslider");
    setk2("form-section form-section-move");
  };
  const theme = useTheme();
  
  return (
    <div>
      
        <body className={theme.theme === true ? "login_dark" : "login_white"}>
          <header>
            <h1 className="heading">User Login</h1>
          </header>
          <div className="container">
            <div className={k1} id="slider"></div>
            <div className="btn">
              <button className="login" onClick={hand}>
                Login
              </button>
              <button className="signup" onClick={hand1}>
                Signup
              </button>
            </div>
            <div className={k2} id="form-section">
              <div className="login-box">
                <input
                  type="email"
                  className="email ele"
                  placeholder="youremail@email.com"
                />
                <input
                  type="password"
                  className="password ele"
                  placeholder="password"
                />
                <button className="clkbtn">Login</button>
              </div>

              {/* <!-- signup form --> */}

              <div className="signup-box">
                <input
                  type="text"
                  className="name ele"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  className="email ele"
                  placeholder="youremail@email.com"
                />

                <input
                  type="password"
                  className="password ele"
                  placeholder="password"
                />
                <input
                  type="password"
                  className="password ele"
                  placeholder="Confirm password"
                />
                <button className="clkbtn" id="login_signup">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </body>
      
    </div>
  );
}
