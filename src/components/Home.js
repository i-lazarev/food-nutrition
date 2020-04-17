import React, {useContext, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {TokenContext} from './TokenContext';
import MostSeen from "./MostSeen";
import AllFood from "./AllFood";
import Categories from "./Categories";

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
        <Header x={'#000'} />
        home
        {/* <MostSeen />
        <AllFood />
        <Categories /> */}
        <Footer />
      </div>
    );
}