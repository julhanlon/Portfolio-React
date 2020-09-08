import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"



const Nav = () => {
  return (
    <>
      <nav className=" mt-4 ">
        <div className="list">
          <Link to="/" style = {{fontSize: "1.3rem"}}>
            Julia Hanlon
          </Link>
          <ul className="">
            <li >
              <Link to="/webdesign" className="">
               Web Development
              </Link>
            </li>
            <li >
              <Link to="/architecture" className="">
                Architecture
              </Link>
            </li>
            <li >
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