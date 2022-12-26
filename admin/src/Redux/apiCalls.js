import { loginfailure, loginstart, loginsuccessful } from "./userRedux"
import { getProductStart, getProductSuccess, getProductFaliure, DeleteStart, DeleteSuccess, DeleteFaliure } from "./productRedux"
import { publicRequest, userRequest } from '../requestMethod.js';
export const login = async (dispatch, user) => {
    dispatch(loginstart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginsuccessful(res.data));
    } catch (error) {
        dispatch(loginfailure());
    }
}
export const getProduct = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFaliure());
    }
}
export const deleteProduct = async (dispatch, id) => {
    dispatch(DeleteStart());
    try {
        //const res = await userRequest.delete(`/products/${id}`);
        dispatch(DeleteSuccess(id));
    } catch (error) {
        dispatch(DeleteFaliure());
    }
}