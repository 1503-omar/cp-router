import React from "react";
import Rate from "../Rate";
import "./Header.css";
import {NavLink }from  'react-router-dom'
const Header = ({ setMyInput, setMyRate, myRate }) => {
  return (
    <div style={{display:'flex',
    justifyContent:'space-around',
    backgroundColor:'blue',
    height:60}}>
       <NavLink style={{textDecoration:'none'}}
            exact
            to="/"
            className="nav-link"
            activeClassName="selected-link"
          >
            Home
          </NavLink>
       <NavLink style={{textDecoration:'none'}}
            exact
            to="/About"
            className="nav-link"
            activeClassName="selected-link"
          >About
          </NavLink>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setMyInput(e.target.value)}
        />
        <Rate rating={myRate} setMyRate={setMyRate} />
      </div>
    </div>
  );
};

export default Header;