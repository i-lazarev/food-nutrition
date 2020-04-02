import React ,{useContext, useState}from 'react';
import {Input} from "reactstrap";
import FontAwesome from "react-fontawesome";
import {ApiContext} from "./ApiContext";
  


export default function SearchBar() {
    const [input, setInput] = useState("")
    const [query, setQuery] =  useContext(ApiContext)
    const updateQuery =(e) =>{
        e.preventDefault()
       setQuery(input)
      }

    return (
        <div>
        <form onSubmit={updateQuery} style={{"display":"flex"}}>
                <Input type="text" name="search" value={input} className="input-search" placeholder="Search" onChange={(e)=>setInput(e.target.value)} />
                <button>
                  <FontAwesome name="search"  />
                </button>
                
              </form>
            
        </div>
    )
}
