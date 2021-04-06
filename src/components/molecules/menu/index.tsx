import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLinkProps } from '../../../types/types'

import './style.scss'

type Props = {
    urlLogo: string
    listNavLinks: Record<string, NavLinkProps>[]
}

const Menu = ({
  urlLogo,
  listNavLinks
}: Props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="px-4 menu-main menu-position fixed-top"
    >
      <Navbar.Brand href={listNavLinks[0].navLink.href}>
        <img src={urlLogo} id="menu-logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav-right">
        <Nav>
          {listNavLinks.map((l, index) => {
            if (l.navLink.items) {
              return (
                <NavDropdown
                  key={index}
                  title={l.navLink.label}
                  id="collasible-nav-dropdown"
                  className="px-3"
                >
                  {l.navLink.items.map((li, idx) => {
                    return (
                      <NavDropdown.Item
                        key={idx}
                        href={li.navLink.href}
                        className="py-3 text-center"
                      >
                        {li.navLink.label}
                      </NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              )
            } else {
              return (
                <Nav.Link
                  key={index}
                  href={l.navLink.href}
                  className="px-3"
                >
                  {l.navLink.label}
                </Nav.Link>
              )
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
