import React from "react";
import "./navbar.scss";
import Hamburger from "./images/hamburger2.svg";
import xIcon from "./images/close-hamburger.svg";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  state = {
    open: false,
  };

  render() {
    //toggle the open state
    const openNav = () => {
      this.setState(({ open }) => ({ open: !open }));
    };

    return (
      <>
        <nav className={!this.state.open ? "" : "responsive-nav"}>
          <div className="logo">Recipy</div>
          <ul className={!this.state.open ? "list-items" : "list-items-mobile"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ingredientsearch">Search by Ingredient</Link>
            </li>
          </ul>
          <div className="hamburger">
            <img
              src={this.state.open ? xIcon : Hamburger}
              alt="hamburger menu icon"
              onClick={openNav}
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
