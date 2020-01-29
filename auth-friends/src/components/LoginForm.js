import React, { useState } from "react";
import { connect } from "react-redux";

import { Form } from "../styles/form";
import { login } from "../actions/loginAction";

const LoginForm = ({ login, history }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await login(formData);
    history.push("/friends");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
};

export default connect(undefined, { login })(LoginForm);
