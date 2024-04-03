import { OPEN_WEATHER_IMAGE_BASE_URL, OPEN_WEATHER_IMAGE_SUFFIX } from "../constants/constants"
import { kelvinToCelsius } from "./commonHelper"
import { formatDateFromTimestamp } from "./dateHelper"

export const findHourlyData = (data) => {
    let weatherArr = []
    let hourlyMax = 0
    if(data.length > 5) {
        hourlyMax = 5
    }
    else {
        hourlyMax = data.length
    }
    for (let hourlyIndex = 0; hourlyIndex < hourlyMax; hourlyIndex++) {
        let weatherObj = {}
        const weatherDate = formatDateFromTimestamp(data[hourlyIndex].dt)
        const temparature = kelvinToCelsius(data[hourlyIndex]?.main?.temp)
        const icon = OPEN_WEATHER_IMAGE_BASE_URL + data[hourlyIndex]?.weather[0]?.icon + OPEN_WEATHER_IMAGE_SUFFIX
        weatherObj.weatherDate = weatherDate
        weatherObj.temparature = temparature + '°c'
        weatherObj.icon = icon
        weatherArr.push(weatherObj)
    }
    return weatherArr
}

export default findHourlyData