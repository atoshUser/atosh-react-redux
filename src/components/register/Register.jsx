import { useState } from "react";
import { Input } from "../../UI";
import style from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../../service/auth";
import {
  addUserFailure,
  addUserSuccess,
  userLoginStart,
} from "../../reducer/auth/auth";
const Register = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLoginStart());
    const user = {
      username,
      password,
      email,
    };
    try {
      const response = await AuthService.registerUser(user);
      dispatch(addUserSuccess(response.user));
    } catch (error) {
      dispatch(addUserFailure(error.response.data.errors));
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <h2 className="fs-2 font-bold">Please Register</h2>
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
