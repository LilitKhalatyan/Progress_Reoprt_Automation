import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
};

const studentSlice = createSlice({
    name: "students",
    initialState: initialState,
    reducers: {
        getAllStudentsAction: (state) => {},
        getAllStudentsSuccesed: (state, action) => {
            state.students = action.payload;
        },
    },
});

export const { getAllStudentsAction, getAllStudentsSuccesed } = studentSlice.actions;

export default studentSlice;