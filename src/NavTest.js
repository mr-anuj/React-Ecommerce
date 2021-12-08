import React from "react";
import { Link } from "react-router-dom";

const NavTest = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">firstpage</Link>
        </li>
        <li>
          <Link to="/third">Secondpage</Link>
        </li>
        <li>
          <Link to="/fourth">Fourthpage</Link>
        </li>
      </ul>
    </>
  );
};

export default NavTest;
