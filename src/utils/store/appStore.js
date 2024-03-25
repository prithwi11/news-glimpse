import { configureStore } from "@reduxjs/toolkit";
import newsDetailsSlice from "./slices/newsDetailsSlice";

export default configureStore({
    reducer : {
        newsDetails : newsDetailsSlice
    }
})