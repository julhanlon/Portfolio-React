import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="floatRight mt-4">
        <div className="container">
          <Link to="/" className="">
            Julia Hanlon
          </Link>
          <ul className="">
            <li>
              <Link to="/webdesign" className="">
               Web Development
              </Link>
            </li>
            <li>
              <Link to="/architecture" className="">
                Architecture
              </Link>
            </li>
            <li>
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