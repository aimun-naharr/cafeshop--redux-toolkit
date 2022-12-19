import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
        reducerPath: "mealApi",
        baseQuery: fetchBaseQuery({
                baseUrl: "https://snapblog-server-production-3fea.up.railway.app/api/",
        }),
        endpoints: (builder) => ({
                getMeal: builder.query({
                        query: () =>  "/posts"
                        
                }),
        }),
});

export const { useGetMealQuery } = mealApi;
