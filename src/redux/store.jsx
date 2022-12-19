import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./features/mealSlice";
import userSlice from "./features/userSlice";
import { mealApi } from "../apiSlice";

const store = configureStore({
      reducer:{
        [ mealApi.reducerPath]: mealApi.reducer,
      },
       
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mealApi.middleware),
});
export default store;
