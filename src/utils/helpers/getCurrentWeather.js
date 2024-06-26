
import api_call from "../apiHelper/apiCall";
import { current_weather_url } from "../apiHelper/apiUrl";
import { NODE_URL } from "../constants/constants";

export const getCurrentWeather = async (position) => {
    const api_url = NODE_URL + current_weather_url;
    const current_weather = await api_call(api_url, 'POST', position);
    return current_weather;
};
