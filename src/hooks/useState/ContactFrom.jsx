import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const contactData = {
    //   username,
    //   email,
    //   message,
    // };

    console.log(contacts);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            required
            autoComplete="off"
            value={contacts.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"

            required
            autoComplete="off"
            value={contacts.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            placeholder="message"

            required
            autoComplete="off"
            rows="6"
            value={contacts.message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInputChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
{/**
  Reusable COmponent input field
  2️⃣ src/components/InputField.jsx

This is the child component that renders a single input field.
import React from "react";

// Reusable input field component
export default function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ marginRight: "10px" }}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

src/App.jsx

This is the parent component, which:

Holds the form state

Passes state values and onChange function to InputField

Handles form submission

import React, { useState } from "react";
import InputField from "./components/InputField";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handles input changes from child components
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Hello ${formData.firstName}! Registration successful.`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <InputField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />

        <button type="submit" style={{ padding: "5px 15px", marginTop: "10px" }}>
          Register
        </button>
      </form>

      <h3>Preview:</h3>
      <p>
        Name: {formData.firstName} {formData.lastName} <br />
        Email: {formData.email}
      </p>
    </div>
  );
}


4️⃣ src/index.js

Entry point to render your app:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


*/}
