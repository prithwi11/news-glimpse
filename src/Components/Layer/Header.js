import React, { useRef, useState, useEffect } from 'react'
import { ALL_IMAGE } from '../../utils/constants/imageConstants'
import { NEWS_CATEGORIES, OPEN_WEATHER_IMAGE_BASE_URL, OPEN_WEATHER_IMAGE_SUFFIX } from '../../utils/constants/constants'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCurrentLocation } from '../../utils/helpers/getCurrentLocation'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather } from '../../utils/helpers/getCurrentWeather'
import { addCurrentWeather } from '../../utils/store/slices/currentWeatherSlice'
import { kelvinToCelsius } from '../../utils/helpers/commonHelper'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const param = useParams()
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    const fetchWeatherData = async() => {
      const position = await getCurrentLocation()
      let currentWeather = {}
      if (Object.keys(position).length !== 0) {
        currentWeather = await getCurrentWeather(position)
      }
      dispatch(addCurrentWeather(currentWeather.response))
      return currentWeather
    }
    fetchWeatherData()
  }, [])
  
  const weatherData = useSelector((store) => store.currentWeather)
  
  useEffect(() => {
    if(param && param.hasOwnProperty('categoryIdentifier')) {
      const {categoryIdentifier} = param
      const categoryName = NEWS_CATEGORIES.filter((category) => {
        return category.identifier == categoryIdentifier
      })
      setCategoryName(categoryName[0].name)
    } 
  }, [param])
  
  const handleSearchNews = () => {
    navigate('/search-news/'+searchText.current.value)
    navigate('/login')
  }
  return (
    <div className=' w-full bg-gray-800'>
      <div className='flex justify-between'>
        <Link to='/' className=''>
          <img className='p-2 m-2 w-44 cursor-pointer' src={ALL_IMAGE.logo_header} alt="logo"/>
        </Link>
        <div className='right-0 p-2 my-4 mx-4'>
          <div className=''>
            <input type='text' ref={searchText} className='p-2 m-2 rounded-lg' placeholder='Search' />
            <button className='p-2 bg-red-600 text-white font-bold rounded-sm' onClick={handleSearchNews}>Search</button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='flex justify-between text-white font-bold'>
        <ul className='flex'>
        {NEWS_CATEGORIES.map((news_category) => 
            <li 
                className={`p-2 m-2 hover:text-red-600 ${categoryName === news_category.name ? 'text-red-600' : ''}`} 
                key={news_category.identifier}
            >
                <Link to={`/category/${news_category.identifier}`}>{news_category.name}</Link>
            </li>
        )}
        </ul>
        <ul className='flex justify-center items-center  '>
          <Link to={'/weather'} className='p-2 m-2 right-4 flex hover:text-red-600 cursor-pointer'>
            <img className='w-8 h-8 to-white' src={ALL_IMAGE.MAP_IMAGE} />
            <p className='p-2'>Kolkata</p>
            <div className='text-gray-600 shadow-emerald-400'> 
              <img className='w-15 h-15 px-2 -my-7 ' src={OPEN_WEATHER_IMAGE_BASE_URL + weatherData?.currentWeather?.weather[0]?.icon + OPEN_WEATHER_IMAGE_SUFFIX}/>
            </div>
            <p className='p-2'>{kelvinToCelsius(weatherData?.currentWeather?.main?.temp)} °c</p>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header