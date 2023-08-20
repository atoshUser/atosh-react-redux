import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
  articleDetail: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSucces: (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    },

    getArticleFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.articleDetail = action.payload;
      state.isLoading = false;
    },
    getArticleDetailFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state, action) => {
      console.log(action.payload);
      state.articles = [...state.articles, action.payload];
      state.isLoading = false;
    },
    postArticleFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getArticleStart,
  getArticlesSucces,
  getArticleFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
