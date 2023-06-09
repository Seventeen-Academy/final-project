import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";

export default configureStore({
  reducer: {
    userReducer,
  },
});
