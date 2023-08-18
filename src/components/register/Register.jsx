import { useState } from "react";
import { Input } from "../../UI";
import style from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserData,
  addUserName,
  userLoginStart,
} from "../../reducer/auth/auth";
const Register = () => {
  const { isLogIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginStart());
    try {
      const data = {
        userName,
        password,
        email,
      };
      dispatch(addUserData(data));
      dispatch(userLoginStart())
    } catch (error) {
      console.log(`User ma'lumotlar jo'natilmadi`);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <h2 className="fs-2 font-bold">Please Register</h2>
        <Input state={userName} setState={setUserName} label={"Username"} />
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
            disabled={isLogIn}
          >
            {isLogIn ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
