import { useEffect, useState } from "react";
import { Input } from "../../UI";
import style from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../../service/auth";
import {
  addUserFailure,
  addUserSuccess,
  userLoginStart,
} from "../../reducer/auth/auth";
import ValidationError from "../validation-error/ValidationError";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { isLogIn, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogIn) {
      navigate(`/`);
    }
  }, [isLogIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
      email,
    };

    if (!username && !password && !email) {
      return null;
    } else {
      try {
        dispatch(userLoginStart());
        const response = await AuthService.registerUser(user);
        dispatch(addUserSuccess(response.user));
        navigate(`/`);
        setUserName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        dispatch(addUserFailure(error.response.data.errors));
      }
    }
  };

  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <h2 className="fs-2 font-bold">Please Register</h2>
        <ValidationError />
        <Input state={username} setState={setUserName} label={"Username"} />
        <Input state={email} setState={setEmail} type="email" label={"Email"} />
        <Input
          state={password}
          setState={setPassword}
          type="password"
          label={"Password"}
        />
        <div>
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
