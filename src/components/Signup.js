import React, { useState, Fragment } from "react";
import {useHistory} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export default function Signup () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history=useHistory();
  const [errMsg, setErrMsg]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username.length>0 && password.length>5){
    fetch("http://localhost:5000/sign-up", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        data.error
          ? setErrMsg(data.error)
          : history.push({pathname: '/create-account', state: {email: email }})
            });
      }
    
  }
 

  return (
    <Fragment>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <div
          style={{
            justifySelf: "flex-start",
            height: "100px",
            paddingTop: "40px",
            color: "#F94F72",
          }}
        >
          {errMsg}
        </div>
        <form onSubmit={handleSubmit}>
          <div>username</div>
          <input
            className="userInfo"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>email</div>
          <input
            className="userInfo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>password</div>
          <input
            className="userInfo"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>* min 6 characters</div>
          <div style={{ width: "100%", textAlign: "center", padding: "30px" }}>
            <button className="bbtn" type="submit">
              {" "}
              next
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}