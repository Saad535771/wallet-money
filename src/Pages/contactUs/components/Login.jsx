import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email"): "saad@.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "123";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      alert("Login Success");
      navigate("/"); 
    } else {
      alert("invalid Email or password");
    }
  };
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
              </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/Signup">Signup !</Link>
            </p>
          </div>
          <Button variant="contained" type="submit"  onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
