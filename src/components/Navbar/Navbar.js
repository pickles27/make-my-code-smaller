import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, TitleWrapper } from "./styles";

export default function Navbar() {
  return (
    <div>
      <NavWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </NavWrapper>
      <TitleWrapper>make my code smaller</TitleWrapper>
    </div>
  );
}
