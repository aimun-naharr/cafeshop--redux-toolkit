import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
        meals: [],
        isLoading: false,
        isError: false,
        error: "",
};
export const getMeals = createAsyncThunk("meal/getMeals", async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data =await res.json();
        return data.categories;
});
const mealSlice = createSlice({
        name: "meal",
        initialState,
        extraReducers: (builder)=>{
         builder.addCase(getMeals.pending, (state,action)=>{
          state.isLoading=true,
          state.isError=false
         })
         .addCase(getMeals.fulfilled, (state, action)=>{
          state.meals=action.payload,
          state.isLoading=false,
          state.isError=false
         })
         .addCase(getMeals.rejected, (state,action)=>{
          state.isLoading=false,
          state.isError=true,
          state.error=action.error.message,
          state.meals=[]
         })
        }
});
export default mealSlice.reducer