import { configureStore } from "@reduxjs/toolkit";
import newsDetailsSlice from "./slices/newsDetailsSlice";
import currentWeatherSlice from "./slices/currentWeatherSlice";
import forecastedHourlyDataSlice from "./slices/forecastedHourlyDataSlice";
import forecastedDailyDataSlice from "./slices/forecastedDailyDataSlice";

export default configureStore({
    reducer : {
        newsDetails : newsDetailsSlice,
        currentWeather : currentWeatherSlice,
        forecastedHourlyData : forecastedHourlyDataSlice,
        forecastedDailyData : forecastedDailyDataSlice
    }
})