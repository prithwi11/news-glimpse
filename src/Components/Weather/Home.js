import React from 'react'
import Header from '../Layer/Header'
import WeatherHeader from './WeatherHeader'
import DailyWeather from './DailyWeather'
import api_call from '../../utils/apiHelper/apiCall'
import { NODE_URL } from '../../utils/constants/constants'
import { forecast_weather_url } from '../../utils/apiHelper/apiUrl'
import { useEffect, useState } from 'react'
import findHourlyData from '../../utils/helpers/findHourlyData'
import { useDispatch } from 'react-redux'
import { addForecastedHourlyData } from '../../utils/store/slices/forecastedHourlyDataSlice'
import { findDailyData } from '../../utils/helpers/findDailyData'
import { addForecastedDailyData } from '../../utils/store/slices/forecastedDailyDataSlice'

const Weather = () => {
  const [forecastWeatherStatus, setForecastWeatherStatus] = useState(true)
  const dispatch = useDispatch()
    let body = {
        "city" : "Kolkata",
        "country" : "IN"
    }

    const fetchHourlyWeather = async() => {
        const api_url = NODE_URL + forecast_weather_url
        const forecastWeather = await api_call(api_url, 'POST', body)
        if (forecastWeather) {
            const hourlyWeatherData = findHourlyData(forecastWeather.response?.list);
            const dailyWeatherData = findDailyData(forecastWeather.response?.list)
            dispatch(addForecastedHourlyData(hourlyWeatherData))
            dispatch(addForecastedDailyData(dailyWeatherData))
            setForecastWeatherStatus(true)
        }
        else {
          setForecastWeatherStatus(false)
        }
    }

    useEffect(() => {
        fetchHourlyWeather()
    }, [])
  return (
    <div>
        <Header />
        {forecastWeatherStatus && (
          <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white p-10 bg-gradient-to-br from-yellow-200 via-blue-50 to-blue-200 ">
            <WeatherHeader />
            <DailyWeather />
        </div>
        )
        }
          
    </div>

  )
}

export default Weather