import React, { useState } from "react";
import { connect } from "react-redux";

import { editFriend } from "../actions/editFriendAction";
import { Form as StyledForm } from "../styles/form";

const EditForm = ({ editFriend, history, selectedFriend }) => {
  const [formData, setFormData] = useState({
    name: selectedFriend.name,
    age: selectedFriend.age,
    email: selectedFriend.email
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editFriend(selectedFriend.id, formData);
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
      <button>update</button>
    </StyledForm>
  );
};

const mapStateToProps = state => {
  return {
    selectedFriend: state.friendToEdit
  };
};

export default connect(mapStateToProps, { editFriend })(EditForm);
