import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ history }) => {
  console.log(history);
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <header>
      <StyledNav>
        <NavContainer>
          <NavItem to="/friends" activeStyle={activeNavStyle}>
            home
          </NavItem>
          <NavItem to="/add-friend" activeStyle={activeNavStyle}>
            add friend
          </NavItem>
          <LogOut onClick={logOut}>log out</LogOut>
        </NavContainer>
      </StyledNav>
    </header>
  );
};

export default connect(undefined, {})(Nav);

const StyledNav = styled.nav`
  background-color: #1c1c1c;
  padding: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  *:not(:last-child) {
    margin-right: 2rem;
  }

  *:hover {
    color: #6c6c6c;
    cursor: pointer;
  }
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #eee;
  font-size: 24px;
`;

const LogOut = styled.p`
  color: #eee;
  font-size: 24px;
  display: inline;
`;

const activeNavStyle = {
  textDecoration: "line-through",
  color: "#28C969"
};
