import React, { memo } from "react";

let Navbar = memo(() => {
  return (
    <nav className="navbar bg-blue px-5">
      <div className="d-flex align-items-center">
        <h3 className="d-flex align-items-center mt-2">
          <i className="fab fa-github text-white" />
        </h3>
        <h6 className="navbar-brand text-white ml-3 mt-2">GitPlay</h6>
      </div>
    </nav>
  );
});

export default Navbar;
