import React, {useContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import {TokenContext} from './TokenContext'

export default function Home() {
    const [token, setToken] = useContext(TokenContext);
    return (
        <div>
           <Header/>
           <h1>Home</h1>
           {token}
           <Footer/>
        </div>
    )
}