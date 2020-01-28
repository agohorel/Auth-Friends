import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../actions/loginAction";

const LoginForm = ({ login, history }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(formData);
    history.push("/friends");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>log in</button>
    </form>
  );
};

export default connect(undefined, { login })(LoginForm);
