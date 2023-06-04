import React from "react";
import { MenuItem } from "./MenuItem";

export const Navigation = () => {
  const menuItems = [
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About Me",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="navbar navbar-expand-md top-nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          Suman
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menuItems.map((item) => (
              <MenuItem href={item.href} label={item.label} key={item.href} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
