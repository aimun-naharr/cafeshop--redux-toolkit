import { createSlice } from "@reduxjs/toolkit"

const initialState={
 user:{}
}

const userSlice=createSlice({
 name: 'User',
 initialState,
 reducers:{}
})

export default userSlice.reducer