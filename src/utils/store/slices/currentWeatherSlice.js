import { createSlice } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
    name : 'currentWeather',
    initialState : {},
    reducers : {
        addCurrentWeather : (state, action) => {
            state.currentWeather = action.payload
        }
    }
})

export const { addCurrentWeather } = currentWeatherSlice.actions
export default currentWeatherSlice.reducer