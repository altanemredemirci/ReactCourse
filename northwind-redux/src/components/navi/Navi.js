import React, { Component } from 'react'
import {
Nav,Navbar,NavbarBrand,NavbarText,NavbarToggler,Collapse,
NavItem,NavLink} from  "reactstrap"
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/components/">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
             <CartSummary/>
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

