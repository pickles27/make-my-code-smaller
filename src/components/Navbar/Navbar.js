import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavWrapper>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/submit">Submit</StyledLink>
          </li>
          <li>
            <StyledLink to="/profile">Profile</StyledLink>
          </li>
        </ul>
      </NavWrapper>
      <TitleWrapper>make my code smaller</TitleWrapper>
    </div>
  );
}


export const NavWrapper = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TitleWrapper = styled.h1`
  text-align: center;
`;
