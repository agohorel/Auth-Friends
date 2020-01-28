import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async e => {
    e.preventDefault;
    try {
      axios.post("http://localhost:5000/api/login", formData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <label htmlFor="username"></label>
      <input type="text" id="username" value={formData.username} />
      <label htmlFor="password"></label>
      <input type="password" id="password" value={formData.password} />
      <button>log in</button>
    </form>
  );
};
