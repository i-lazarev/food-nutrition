import React, { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext();

export const TokenProvider = props => {
  const [token, setToken] = useState(()=> {
      const localData=localStorage.getItem('token');
     return localData?localData: null});

  useEffect(()=>{
     if(token) {localStorage.setItem('token',token);}
  },[token])

  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};