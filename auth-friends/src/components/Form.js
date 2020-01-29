import React, { useState } from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions/addFriendAction";
import { Form as StyledForm } from "../styles/form";

const Form = ({ addFriend, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const friendData = {
      ...formData,
      id: Date.now()
    };
    addFriend(friendData);
    history.push("/friends");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="age">age</label>
      <input
        type="text"
        id="age"
        value={formData.age}
        onChange={handleChange}
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button>add friend</button>
    </StyledForm>
  );
};

export default connect(undefined, { addFriend })(Form);
