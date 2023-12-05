import React, { useState } from "react";
import "./UserLogins.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/v1/users/login", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero-section">
        <div className="background">
          <div className="headings">
            <h1>ATHLARK</h1>
            <h3> - UNLEASH YOUR INNER ADMIN - </h3>
            <hr className="hr" />
          </div>

          <div className="paragraph">
            <h4>Ready to take charge ? </h4>
            <form action="" className="form-user" onSubmit={login}>
              <h3>Enter your credentials</h3>

              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <div className="check-input">
                <div className="form-check-user">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot your password ?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
