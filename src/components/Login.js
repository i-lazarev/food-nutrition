import React, { useState, useContext } from "react";
import { TokenContext } from "./TokenContext";
import { useHistory } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.token);
        setToken(data.token);
        history.push("/");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
