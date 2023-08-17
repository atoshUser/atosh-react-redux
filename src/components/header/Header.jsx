import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center  p-3">
      <Link to="/" className="text-white text-decoration-none">
        <h2>
          <em>Atosh</em>
        </h2>
      </Link>
      <div className="d-flex align-items-center gap-3">
        <Link to={"login"} className="text-white text-decoration-none">
          <p>Log In</p>
        </Link>
        <Link to={"/register"} className="text-white text-decoration-none">
          <p>
            <b>Register</b>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
