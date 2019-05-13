import React, { memo } from "react";
import { Link } from "react-router-dom";

let LandingPage = memo(_ => {
  return (
    <div className="hero-banner">
      <div className="container d-flex justify-content-center align-items-center h-100 flex-column">
        <h1 className="text-white font-weight-bold">
          Search projects on GitHub's platform
        </h1>
        <h5 className="mt-3 text-white">
          Drive innovation with the power of people
        </h5>
        <Link to="/github">
          <button className="bg-blue mt-4 px-5 py-3 text-white font-weight-light rounded h6 text-white">
            EXPLORE
          </button>
        </Link>
      </div>
    </div>
  );
});

export default LandingPage;
