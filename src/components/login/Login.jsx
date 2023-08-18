import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../UI";
import style from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.formWrapper}>
      <form className={style.form}>
        <h3 className="text-uppercase fs-2">Log In</h3>
        <Input type={"email"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
        <div>
          <button type="button" className="btn btn-success btn-lg">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
