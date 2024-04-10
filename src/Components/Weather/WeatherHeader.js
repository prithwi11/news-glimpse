import React from 'react'
import HourlyWeather from './HourlyWeather'
import { useSelector } from 'react-redux'
import { OPEN_WEATHER_IMAGE_BASE_URL, OPEN_WEATHER_IMAGE_SUFFIX } from '../../utils/constants/constants'
import { kelvinToCelsius } from "../../utils/helpers/commonHelper"

const WeatherHeader = () => {
  const currentWeatherData = useSelector((store) => store.currentWeather.currentWeather)
  return (
    <div className='w-full max-w-screen-sm bg-gray-800 p-10 rounded-xl '>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="text-6xl font-bold">{kelvinToCelsius(currentWeatherData?.main?.temp)} °c</span>
                <span className="font-semibold mt-1 text-white">{currentWeatherData?.name}, {currentWeatherData?.sys?.country}</span>
            </div>
            <img className='w-32 -my-10' alt='weather-icon' src={OPEN_WEATHER_IMAGE_BASE_URL + currentWeatherData?.weather[0]?.icon + OPEN_WEATHER_IMAGE_SUFFIX}  />
        </div>
        <HourlyWeather />
    </div>
  )
}

export default WeatherHeader