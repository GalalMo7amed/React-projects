import { createSlice } from "@reduxjs/toolkit";

const ReportSlice = createSlice({
    name: "report",
    initialState: { logs: [] },
    reducers: {
        logInsert: (state, action) => {
            state.logs.push(action.payload);
        }
    }
})

export const { logInsert } = ReportSlice.actions;
export default ReportSlice.reducer;