import React from "react";
import { Input, TextArea } from "../../UI";
import style from "./article-form.module.css";
import { useSelector } from "react-redux";
const ArticleForm = (prop) => {
  const { isLoading } = useSelector((state) => state.article);
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    submitHandler,
  } = prop;
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input label="Title" state={title} setState={setTitle} />
      <TextArea
        label="Description"
        state={description}
        setState={setDescription}
      />
      <TextArea label="Body" row="4" state={body} setState={setBody} />
      <div className={style.submitBtn}>
        <button
          className="btn btn-success"
          style={{ width: "200px" }}
          disabled={isLoading}
        >
          {isLoading ? `Loading...` : `Create`}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
