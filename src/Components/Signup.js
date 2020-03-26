import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

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
    <div>
      <div style={{height: '100px'}}>
        {errMsg}
      </div>
      <form onSubmit={handleSubmit}>
        <div>username</div>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div>email</div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div>password</div>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
       
        <button type="submit"> next</button>
      </form>
    </div>
  );
}

