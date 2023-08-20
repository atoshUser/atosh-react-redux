import { useDispatch, useSelector } from "react-redux";
import style from "./article.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArticleService from "../../service/article";
import {
  getArticlesSucces,
  postArticleSuccess,
} from "../../reducer/article/article";
const Article = ({ article }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogIn, userData } = useSelector((state) => state.auth);

  const deleteArticle = (slug) => {
    ArticleService.deleteArticle(slug);
 
  };
  return (
    <li className={style.listItem}>
      <span className={`${style.articleBox}`}>
        {article.author.username.charAt(0).toUpperCase()}
      </span>
      <div className={style.items}>
        <h5
          style={{
            whiteSpace: "nowrap",
            color: "#333",
            textTransform: "capitalize",
            paddingLeft: "10px",
          }}
        >
          {`${
            article.title.toLowerCase().includes("anora") ||
            article.title.toLowerCase().includes("sevinch")
              ? "Lorem Ipsum Domeil"
              : article.title
          }`}
        </h5>

        <p className="fs-5 text-dark">{`${
          article.description.toLowerCase().includes("sevinch") ||
          article.description.toLowerCase().includes("anora")
            ? "Lorem ipsum darom ne ta ol pu te"
            : article.description
        }`}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "0",
          padding: "5px 10px",
          width: "100%",
          border: "1px solid #777",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          borderCollapse: "collapse",
        }}
      >
        <div className="btn-group">
          <button
            onClick={() => navigate(`/article-detail/${article.slug}`)}
            type="button"
            className="btn btn-sm btn-outline-success"
          >
            View
          </button>
          {isLogIn && userData.username == article?.author?.username && (
            <>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteArticle(article.slug)}
              >
                Delete
              </button>
            </>
          )}
        </div>
        <h6 className="m-0 ">{article.author.username}</h6>
      </div>
    </li>
  );
};

export default Article;
