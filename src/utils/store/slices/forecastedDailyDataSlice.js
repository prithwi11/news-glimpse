import { createSlice } from "@reduxjs/toolkit";

const forecastedDailyDataSlice = createSlice({
    name : 'forecastedDailyDataSlice',
    initialState : {},
    reducers : {
        addForecastedDailyData : (state, action) => {
            state.forecastedDailyData = action.payload
        }
    }
})

export const { addForecastedDailyData } = forecastedDailyDataSlice.actions
export default  forecastedDailyDataSlice.reducer;