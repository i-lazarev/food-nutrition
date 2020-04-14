import React, {useContext, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {TokenContext} from './TokenContext'

export default function Home() {
    const [token, setToken] = useContext(TokenContext);
    // useEffect(() => {
    //   if (token) {
    //     fetch("http//:localhost:5000/check-token", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Barer ${token}`,
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data == "expired") {
    //           setToken(null);
    //           localStorage.removeItem("token");
    //         }
    //       });
    //   }
    // }, [token]);
    return (
        <div>
           <Header/>
           <h1>Home</h1>
           {token}
           <Footer/>
        </div>
    )
}