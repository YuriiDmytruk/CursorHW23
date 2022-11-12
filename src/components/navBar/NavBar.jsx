import React from "react";
import { NavLink } from "react-router-dom";

import NavBarS from "../styledComponents/NavBarS.js"

function NavBar() {
  return (
    <NavBarS>
      <ul className="header">
        <li className="option">
          <NavLink className="link" to="/">
            Publications
          </NavLink>
        </li>
        <li className="option">
          <NavLink className="link" to="/addForm">
            Add form
          </NavLink>
        </li>
      </ul>
    </NavBarS>
  );
}

export default NavBar;
