import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/counter/counterSlice"
export default configureStore({
  reducer: {
    counter: counterReducer
  },
});