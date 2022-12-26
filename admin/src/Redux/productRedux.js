import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //Get All
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.products = action.payload;
            state.isFetching = false;
        },
        getProductFaliure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //Delete method
        DeleteStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        DeleteSuccess: (state, action) => {
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            )
            state.isFetching = false;
        },
        DeleteFaliure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});
export const { getProductStart, getProductSuccess, getProductFaliure, DeleteStart, DeleteSuccess, DeleteFaliure } = productSlice.actions;
export default productSlice.reducer;