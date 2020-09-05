import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  fontSize: "1.5rem",
  color:"black"
}

const Nav = () => {
  return (
    <>
      <nav className="floatRight mt-4">
        <div className="container" style = {navStyle}>
          <Link to="/" className="">
            Julia Hanlon
          </Link>
          <ul className="">
            <li style = {navStyle}>
              <Link to="/webdesign" className="">
               Web Development
              </Link>
            </li>
            <li style = {navStyle}>
              <Link to="/architecture" className="">
                Architecture
              </Link>
            </li>
            <li style = {navStyle}>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


export default Nav;