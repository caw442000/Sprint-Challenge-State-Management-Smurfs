import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div `
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
align-items: center;
max-width: 100%;
flex-direction: column;
width: 100%; 
padding: 10px;

`

const HeaderNav = styled.nav `
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
align-items: center;
max-width: 100%;
width: 50%; 
padding: 10px;

`


const Header = props => {
  return (
    <HeaderDiv>
      <h1>It Takes A Village</h1>
      <HeaderNav>
        <Link to= "/">Home </Link>
        <Link to= "/addsmurf">Add Smurf</Link>
      </HeaderNav>
    </HeaderDiv>
  );
};
export default Header;