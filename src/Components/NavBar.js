import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1 className="text-center header">
        {" "}
        <Link to="/">
          {" "}
          <img
            src="https://img.icons8.com/stickers/100/null/kawaii-pizza.png"
            alt="pizza"
          ></img>
        </Link>{" "}
        Snacks App
      </h1>
      <Nav fill>
        <Nav.Item>
          <Button variant="warning" className="new-btn">
            <Link to={`/snacks`}>All Snacks</Link>
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="warning" className="new-btn">
            <Link to={`/snacks/new`}>Add A New Snack</Link>
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
