import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    theme: 'light'
 }

 const themeSlice= createSlice({
    name: 'theme',
    initialState,
    reducers:{
        togggleTheme:(state)=>{
            state.theme = state.theme === 'light'? 'dark' : 'light'
        }
    }
 })

 export const {togggleTheme} = themeSlice.actions

 export default themeSlice.reducer