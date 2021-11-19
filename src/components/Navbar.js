import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-1 navbar navbar-expand-lg navbar-light bg-danger">
<b className="navbar-brand text-white ml-4">API v.1 Ninja Name System</b>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      ></div>
    </nav>
  );
};
