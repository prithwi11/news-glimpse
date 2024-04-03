import { dateForDailyData } from "./dateHelper"
import { OPEN_WEATHER_IMAGE_BASE_URL, OPEN_WEATHER_IMAGE_SUFFIX } from "../constants/constants"
import { kelvinToCelsius } from "./commonHelper"

export const findDailyData = (data) => {
    let dailyData = []
    let dailyMax = 0
    const filteredData = filterDataForNext5Days(data);
    if(filteredData.length > 5) {
        dailyMax = 5
    }
    else {
        dailyMax = filteredData.length
    }

    for (let dailyIndex = 0; dailyIndex < dailyMax; dailyIndex++) {
        let dailyObj = {}
        const maxTemp = kelvinToCelsius(filteredData[dailyIndex]?.main?.temp_max)
        const minTemp = kelvinToCelsius(filteredData[dailyIndex]?.main?.temp_min)
        dailyObj.weatherDate = dateForDailyData(filteredData[dailyIndex]?.dt_txt)
        console.log(dateForDailyData(filteredData[dailyIndex]?.dt_txt))
        dailyObj.humidity = filteredData[dailyIndex]?.main?.humidity
        dailyObj.icon = OPEN_WEATHER_IMAGE_BASE_URL + filteredData[dailyIndex]?.weather[0]?.icon + OPEN_WEATHER_IMAGE_SUFFIX
        dailyObj.tempDetails = maxTemp + '° / ' + minTemp + '°'
        dailyData.push(dailyObj)
    }
    return dailyData
}

function filterDataForNext5Days(data) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const fiveDaysTimestamp = currentTimestamp + (5 * 24 * 60 * 60);
  
    const filteredData = data.filter(item => {
      // Get the day timestamp for each item
      const dayTimestamp = item.dt - (item.dt % (24 * 60 * 60));
      
      // Check if the day timestamp falls within the next 5 days
      return dayTimestamp >= currentTimestamp && dayTimestamp < fiveDaysTimestamp;
    });
  
    // Keep only the first item for each day
    const uniqueDates = {};
    const result = [];
    filteredData.forEach(item => {
      const dayTimestamp = item.dt - (item.dt % (24 * 60 * 60));
      if (!uniqueDates[dayTimestamp]) {
        uniqueDates[dayTimestamp] = true;
        result.push(item);
      }
    });
  
    return result;
  }