import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} width="200px" alt="LVL Pp Tuts" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
