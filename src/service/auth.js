import axios from "./api";

const AuthService = {
  async registerUser(user) {
    const { data } = await axios.post("/users", { user });
    return data;
  },
  async userLogin(user) {
    const { data } = await axios.post("/users/login", { user });
    return data;
  },
};
export default AuthService;
