import { createSlice } from "@reduxjs/toolkit";

const forecastedHourlyDataSlice = createSlice({
    name : 'forecastedHourlyDataSlice',
    initialState : {},
    reducers : {
        addForecastedHourlyData : (state, action) => {
            state.forecastedHourlyData = action.payload
        }
    }
})

export const { addForecastedHourlyData } = forecastedHourlyDataSlice.actions
export default forecastedHourlyDataSlice.reducer
