import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand>
              <Link to="/">Nortwind Mağazası</Link>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to="/saveproduct">Ürün Ekle</Link>
                  </NavLink>
                </NavItem>

                <CartSummary />
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
