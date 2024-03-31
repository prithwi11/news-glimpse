import { configureStore } from "@reduxjs/toolkit";
import newsDetailsSlice from "./slices/newsDetailsSlice";
import currentWeatherSlice from "./slices/currentWeatherSlice";

export default configureStore({
    reducer : {
        newsDetails : newsDetailsSlice,
        currentWeather : currentWeatherSlice
    }
})