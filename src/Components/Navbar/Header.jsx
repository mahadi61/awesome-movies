import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-bg">
        <div class="container">
          <a class="navbar-brand">
            <span className="navbar-title">Awesome Movies</span>
          </a>
          <form class="d-flex ms-auto" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn bg-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
