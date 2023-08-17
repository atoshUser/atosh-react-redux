import React from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="container mt-5 d-flex flex-column mb-3">
      Counter:
      <div className="w-350">
        <Counter />
      </div>
    </div>
  );
};

export default App;
