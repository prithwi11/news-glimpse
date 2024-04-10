import React from 'react'
import { useSelector } from 'react-redux'

const HourlyWeather = () => {
  const forecastedHourlyData = useSelector((store)=>store.forecastedHourlyData.forecastedHourlyData)
  return (
    <div className='w-full max-w-screen-sm bg-gray-800 p-10 rounded-xl'>
        <div className="flex justify-between mt-12">
            {forecastedHourlyData && forecastedHourlyData.map((forecastData) => 
              <div className="flex flex-col items-center mx-2">
                  <span className="font-semibold text-lg">{forecastData.temparature}</span>
                  <img className="h-10 w-10 fill-current text-white mt-3" alt='hourly-weather' src={forecastData.icon} />
                  <span className="font-semibold mt-1 text-sm mx-4">{forecastData.weatherDate}</span>
              </div>
            )}
        </div>
    </div>
  )
}

export default HourlyWeather