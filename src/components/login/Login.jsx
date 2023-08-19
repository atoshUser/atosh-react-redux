import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../UI";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import AuthService from "../../service/auth";
import { addUserSuccess, userLoginStart } from "../../reducer/auth/auth";

const Login = () => {
  const { isLogIn, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (isLogIn) {
      navigate("/");
    }
  }, []);

  const togleSubmit = async () => {
    const data = { email, password };
    dispatch(userLoginStart());
    try {
      const { user } = await AuthService.userLogin(data);
      dispatch(addUserSuccess(user));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log("Error at Login get Data");
    }
  };
  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <h3 className="text-uppercase fs-2">Log In</h3>
        <Input
          type={"email"}
          label={"Email"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          label={"Password"}
          state={password}
          setState={setPassword}
        />
        <div>
          <button
            onClick={togleSubmit}
            type="button"
            className="btn btn-success btn-lg"
          >
            {isLoading ? "Sending..." : "Log in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
