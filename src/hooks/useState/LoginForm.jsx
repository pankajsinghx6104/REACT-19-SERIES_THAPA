import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
  const [user,setUser] = useState({
    username: "",
    password: ""
  });
  const handFormChange = (e)=>{
    const {name , value} = e.target;
    setUser((prev)=>({...prev,[name]:value}))

  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user)
  };

  return (
    <div className="container">
      <div className="card">
        <h1 style={{color:"black"}}>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handFormChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handFormChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
