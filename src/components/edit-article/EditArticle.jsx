import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../../reducer/article/article";
import ArticleService from "../../service/article";
import ArticleForm from "../article-form/ArticleForm";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const { articleDetail } = useSelector((state) => state.article);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const { article } = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(article));
      setTitle(articleDetail.title);
      setDescription(articleDetail.description);
      setBody(articleDetail.body);
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const dataInputs = { title, description, body };
    dispatch(postArticleStart());
    try {
      const { article } = await ArticleService.editArticle(slug, dataInputs);
      dispatch(postArticleSuccess(article));
      navigate(`/`);
    } catch (error) {
      dispatch(postArticleFailure(error));
    }
  };
  const props = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    submitHandler,
  };
  useEffect(() => {
    getArticleDetail();
  }, []);
  return (
    <div className="mt-4">
      <h2 className="text-center">Edit Article</h2>
      <ArticleForm {...props} />
    </div>
  );
};

export default EditArticle;
