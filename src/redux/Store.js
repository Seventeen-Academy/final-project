import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import articleReducer from "./reducers/Article";

export default configureStore({
  reducer: {
    userReducer,
    articleReducer,
  },
});
