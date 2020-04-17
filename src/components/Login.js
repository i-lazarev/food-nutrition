import React, { useState, useContext } from "react";
import { TokenContext } from "./TokenContext";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


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
      <Header x="#000" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>Email</div>
          <input
            className="userInfo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{marginTop: '30px'}}>password</div>
          <input
            className="userInfo"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button className="bbtn">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}