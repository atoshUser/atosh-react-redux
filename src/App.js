import { Routes, Route } from "react-router-dom";
import { ArticleDetail, Header, Login, Main, Register } from "./components";
import AuthService from "./service/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserSuccess } from "./reducer/auth/auth";
import ArticleService from "./service/article";
import {
  getArticleFailure,
  getArticleStart,
  getArticlesSucces,
} from "./reducer/article/article";
const App = () => {
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

  //  GET USER TOKEN FROM LOCAL-STORAGE
  const getUser = async () => {
    try {
      const { data } = await AuthService.getUser();
      console.log(data);
      dispatch(addUserSuccess(data.user));
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
    getArticles();
  }, []);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article-detail/:slug" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default App;
