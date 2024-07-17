import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: { isloggedIn: false, name: "GALAL" },
    reducers: {
        IsLogInOut: (state) => {
            state.isloggedIn = !state.isloggedIn
        },
    },
});

export const { IsLogInOut } = authSlice.actions;

export default authSlice.reducer;