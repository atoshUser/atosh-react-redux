import { useDispatch, useSelector } from "react-redux";
import style from "./main.module.css";
import { Article } from "../index";
import { useCallback, useEffect } from "react";
import Loader from "react-js-loader";
import {
  getArticleFailure,
  getArticleStart,
  getArticlesSucces,
} from "../../reducer/article/article";
import ArticleService from "../../service/article";
const Main = () => {
  const { articles } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  // GET  ARTICLES FROM API

  const getArticles = async () => {
    dispatch(getArticleStart());
    try {
      const { articles } = await ArticleService.getArticles();

      dispatch(getArticlesSucces(articles));
    } catch (error) {
      dispatch(getArticleFailure(error));
    }
  };

  useEffect(() => {
    getArticles();
  }, [articles]);

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
