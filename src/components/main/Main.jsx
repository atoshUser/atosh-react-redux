import { useSelector } from "react-redux";
import style from "./main.module.css";
import { Article } from "../index";
import { useCallback, useEffect } from "react";
import Loader from "react-js-loader";
const Main = () => {
  const { articles } = useSelector((state) => state.article);

  return (
    <>
      {articles.length ? (
        <ul className={style.ulList}>
          {articles.map((obj) => {
            return <Article key={obj.id} article={obj} />;
          })}
        </ul>
      ) : (
        <div style={{ marginTop: "115px" }}>
          <Loader
            type="bubble-top"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={100}
          />
        </div>
      )}
    </>
  );
};

export default Main;
