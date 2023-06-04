import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Navigation />

      {/* dynamic content section  */}
      <main className="main"> {children}</main>

      {/* footer section  */}
      <Footer />
    </div>
  );
};
