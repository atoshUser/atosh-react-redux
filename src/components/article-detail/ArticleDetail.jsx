import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleService from "../../service/article";
import Loader from "react-js-loader";
import style from "./article-detail.module.css";
import moment from "moment";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../../reducer/article/article";

const ArticleDetail = () => {
  const { slug } = useParams();
  const { isLoading, articleDetail } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const { article } = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(article));
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "75px",
          }}
        >
          <Loader
            type="bubble-scale"
            bgColor={"#FFFFFF"}
            color={"#FFFFFF"}
            size={100}
          />
        </div>
      ) : (
        <div className={style.article}>
          <h2 className="text-dark">{articleDetail?.title}</h2>
          <p className="text-dark mb-3">{articleDetail?.description}</p>
          <p className="text-dark mb-3">
            <span className="fw-bold ">Created at: </span>
            {moment(articleDetail?.createdAt).format("MMMM Do YYYY")}
          </p>

          <div className={style.bioDetail}>
            <div className={style.bioLeft}>
              <span className="text-primary text-uppercase">
                {articleDetail?.author.username}
              </span>
              <p className="text-dark">{articleDetail?.body}</p>
            </div>
            <div className={`${style.bioRight} text-white`}>
              <span className="fs-3"> {articleDetail?.author.username[0]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
