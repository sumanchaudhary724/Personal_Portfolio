import { Navbar, Nav } from "react-bootstrap";
import { MenuItem } from "./MenuItem";
export const Navigation = () => {
  const menuItems = [
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
      <Navbar variant="dark" className="navbar">
        <div className="container">
          <Navbar.Brand href="#about-me">Suman Chaudhary</Navbar.Brand>

          <Nav className="ms-auto mb-2 mb-lg-0">
            {menuItems.map((item) => (
              <MenuItem key={item.href} href={item.href} label={item.label} />
            ))}
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
