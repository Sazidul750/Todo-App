import React, { useState } from "react";
import "./form.module.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
