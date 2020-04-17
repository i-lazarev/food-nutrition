import React ,{useContext, useState}from 'react';
import {Input} from "reactstrap";
import FontAwesome from "react-fontawesome";
import {ApiContext} from "./ApiContext";
import "../styles/SearchBar.css"
  


export default function SearchBar() {
    const [input, setInput] = useState("")
    const [query, setQuery] =  useContext(ApiContext)
    const updateQuery =(e) =>{
        e.preventDefault()
       setQuery(input)
      }

    return (
      <div>
        <form onSubmit={updateQuery} style={{ display: "flex" }}>
          <Input
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
            type="text"
            name="search"
            value={input}
            className="input-search"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            style={{
              border: "none",
              width: "40px",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <FontAwesome name="search" />
          </button>
        </form>
      </div>
    );
}
