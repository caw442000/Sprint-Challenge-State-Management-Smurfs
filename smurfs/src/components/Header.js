import React from "react";
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <h1>It Takes A Village</h1>
      <nav>
        <Link to= "/">Home </Link>
        <Link to= "/addsmurf">Add Smurf</Link>
      </nav>
    </div>
  );
};
export default Header;