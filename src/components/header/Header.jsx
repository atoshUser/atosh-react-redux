import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../reducer/auth/auth";
import { removeItem } from "../../helpers/persistance-storage";

const Header = () => {
  const { isLogIn, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    removeItem(`token`);
    dispatch(logOutUser());
    navigate(`/login`);
  };
  return (
    <header className="d-flex justify-content-between align-items-center  p-3 border-bottom">
      <Link to="/" className="text-white text-decoration-none">
        <h2>
          <em>Atosh</em>
        </h2>
      </Link>
      {isLogIn ? (
        <div className="d-flex align-items-center gap-3">
          <p
            className="text-white fs-4 text-uppercase"
            style={{ fontFamily: "cursive" }}
          >
            {userData.username}
          </p>
          <button className="btn btn-danger" onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <div className="d-flex  justify-content-center align-items-center gap-3">
          <Link to={"login"} className="text-white text-decoration-none ">
            <p>Log In</p>
          </Link>
          <Link to={"/register"} className="text-white text-decoration-none">
            <p>
              <b>Register</b>
            </p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
