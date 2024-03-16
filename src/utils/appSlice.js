import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:true,
    },
    reducers:{
        togglemenu:(state)=>{
            state.ismenuopen=!state.ismenuopen;
        },
        closemenu:(state,action)=>{
            state.ismenuopen=false;
        }
    },

});

export const{togglemenu,closemenu} =appSlice.actions;
export default appSlice.reducer;