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
  },
});

export const {
  getArticleStart,
  getArticlesSucces,
  getArticleFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
