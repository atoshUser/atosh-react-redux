import axios from "./api";

const AuthService = {
  async registerUser(user) {
    const { data } = await axios.post("/users", { user });
    return data;
  },
};
export default AuthService;
