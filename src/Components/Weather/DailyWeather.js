import React from 'react'
import { useSelector } from 'react-redux'

const DailyWeather = () => {
    const dailyWeatherData = useSelector((store) => store.forecastedDailyData.forecastedDailyData)
  return (
    <div className='flex flex-col space-y-6 w-full max-w-screen-sm bg-gray-800 p-10 mt-10 rounded-xl'>
        {dailyWeatherData && dailyWeatherData.map((dailyData) =>
            <div className="flex justify-between items-center">
                <span className="font-semibold text-lg w-1/4">{dailyData.weatherDate}</span>
                <div className="flex items-center justify-end w-1/4 pr-10">
                    <span className="font-semibold">{dailyData.humidity}%</span>
                </div>
                <img className="h-8 fill-current w-8" src={dailyData.icon} />
                <span className="font-semibold text-lg w-1/4 text-right">{dailyData.tempDetails}</span>
            </div>
        )}    
    </div>
  )
}

export default DailyWeather