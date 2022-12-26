import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
       loginstart:(state)=>{
        state.isFetching=true;
       },
       loginsuccessful:(state,action)=>{
        state.isFetching= false;
        state.currentUser = action.payload;
       },
       loginfailure:(state)=>{
        state.isFetching=false;
        state.error=true;
       }
    }
});
export const {loginstart,loginsuccessful,loginfailure} = userSlice.actions;
export default userSlice.reducer;