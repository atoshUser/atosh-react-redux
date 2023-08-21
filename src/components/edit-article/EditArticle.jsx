import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
} from "../../reducer/article/article";
import ArticleService from "../../service/article";
import ArticleForm from "../article-form/ArticleForm";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const { slug } = useParams();
  const dispatch = useDispatch();
  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
     
      setTitle(response.article.title);
      setDescription(response.article.description);
      setBody(response.article.body);
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };
  const props = { title, setTitle, description, setDescription, body, setBody };
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
