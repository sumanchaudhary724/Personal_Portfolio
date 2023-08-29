import { Navbar, Nav } from "react-bootstrap";

import { MenuItem } from "./MenuItem";
import SoundBar from "./SoundBar";
export const Navigation = () => {
  const menuItems = [
    {
      href: "#education",
      label: "Education",
    },
    {
      href: "#skills",
      label: "Skills",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#about-me",
      label: "About Me",
    },
    {
      href: "#contact",
      label: "Contact Me",
    },
  ];

  return (
    <>
      <Navbar expand="md" className="navbar">
        <SoundBar />
        <div className="container" style={{ color: "white" }}>
          <Navbar.Brand href="#about-me" style={{ color: "white" }}>
            Suman Chaudhary
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                ></MenuItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
