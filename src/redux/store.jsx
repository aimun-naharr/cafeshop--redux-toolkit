import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";

import userSlice from "./features/userSlice";


const store = configureStore({
      reducer:{
        [ apiSlice.reducerPath]: apiSlice.reducer,
      },
       
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
