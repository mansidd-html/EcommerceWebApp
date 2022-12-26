import { loginfailure, loginstart, loginsuccessful } from "./userRedux"
import {publicRequest} from '../requestMethod.js';
export const login = async (dispatch, user) => {
    dispatch(loginstart());
    try {
        const res = await publicRequest.post('/auth/login',user);
        dispatch(loginsuccessful(res.data)); 
    } catch (error) {
        dispatch(loginfailure());
    }
}