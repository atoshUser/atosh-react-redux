import { Routes, Route } from "react-router-dom";
import { Header, Login, Main, Register } from "./components";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
