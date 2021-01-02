import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../AdminLogin/styles.css";





export default function AdminLogin() {
  const history = useHistory();

  const [user, setUser] = useState({}),
    [isLoading, setIsLoading] = useState(false);

  const onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(user)
    history.push("/dashboard");
  };

  return (
    <div className="clogin">
      <form
        className="text-center rounded shadow p-5"
        action="#!"
        onSubmit={onHandleSubmit}
      >
        <p className="h4 mb-4">Sign in</p>
        {/* Email */}
        <input
          type="email"
          name="email"
          id="defaultLoginFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
          onChange={onHandleChange}
          value={user.email}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          id="defaultLoginFormPassword"
          className="form-control mb-4"
          placeholder="Password"
          onChange={onHandleChange}
          value={user.password}
        />

        <div className="d-flex justify-content-around">
          <div>
            {/* Remember me */}
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultLoginFormRemember"
              />
            </div>
          </div>
          <div>
            {/* Forgot password */}

            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
        {/* Sign in button */}
        {isLoading ? (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <button className="btn btn-block my-4" type="submit">
            Sign in
          </button>
        )}
        {/* Register */}

        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}
