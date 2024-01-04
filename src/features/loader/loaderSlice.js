import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
}

const loaderSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        hideLoading: (state) => {
            state.isLoading = false
            console.log(state)
        },
        showLoading: (state) => {
            console.log(state)
        }
    }
})

export const { hideLoading, showLoading } = loaderSlice.actions;

export default loaderSlice.reducer;