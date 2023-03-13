import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">Logo</div>
      <div className="flex items-center">Look at me</div>
      <div className="flex items-center max-sm:hidden">menu</div>
      <div className="flex items-center">Resume</div>
    </div>
  );
};

export default Navbar;
