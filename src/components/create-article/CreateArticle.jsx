import { useState } from "react";
import ArticleForm from "../article-form/ArticleForm";
import ArticleService from "../../service/article";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../../reducer/article/article";
import { useNavigate } from "react-router-dom";
const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.article);
  const submitHandler = async (e) => {
    e.preventDefault();

    const articleData = { title, description, body };
    dispatch(postArticleStart());
    try {
      const { article } = await ArticleService.postArticle(articleData);
      dispatch(postArticleSuccess(article));
      setTitle("");
      setDescription("");
      setBody("");
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

  return (
    <div>
      <h2>Create Article:</h2>
      {isLoading ? (
        <Loader
          type="box-up"
          bgColor={"#FFFFFF"}
          color={"#FFFFFF"}
          size={100}
        />
      ) : (
        <ArticleForm {...props} />
      )}
    </div>
  );
};

export default CreateArticle;
