import React ,{useContext, useState}from 'react';
import {Input} from "reactstrap";
import {ApiContext} from "./ApiContext";
import "../styles/SearchBar.css"
import { useHistory } from 'react-router-dom';
import SearchIcon from '../assets/search-icon.png';
  


export default function SearchBar() {
    const [input, setInput] = useState("")
    const [query, setQuery] =  useContext(ApiContext)

    const history=useHistory()
    const updateQuery =(e) =>{
        e.preventDefault()
       setQuery(input)
      history.push("/recipes")
      }
      console.log(query)

    return (
      <div>
        <form id="search-form"
         onSubmit={updateQuery}>
          <Input
            type="text"
            name="search"
            value={input}
            id="input-search"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
          id="search-btn"
          >
            <img src={SearchIcon} id="search-image" alt="search-icon"/>
          </button>
        </form>
      </div>
    );
}
