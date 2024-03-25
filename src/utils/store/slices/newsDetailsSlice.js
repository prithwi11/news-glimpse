import { createSlice } from "@reduxjs/toolkit";

const newsDetailsSlice = createSlice({
    name : 'newsDetails',
    initialState : {},
    reducers : {
        addNewsDetails : (state, action) => {
            state.newsDetails = action.payload
        }
    }
})

export const { addNewsDetails } = newsDetailsSlice.actions
export default newsDetailsSlice.reducer