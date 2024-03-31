import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants/constants'
import api_call from '../../utils/apiHelper/apiCall'
import { NEWS_CATEGORIES } from '../../utils/constants/constants'
import { home_page_api_url } from '../../utils/apiHelper/apiUrl'
import NewsCart from './NewsCart'

const CategoryWiseContent = ({identifier, name}) => {
  const [categoryWiseNews, setCategorywiseNews] = useState(null)
  
  const fetchCategoryWisenews = async(identifier) => {
    const API_URL = BASE_URL + home_page_api_url + '?country=in&category='+identifier+'&apiKey=' + process.env.REACT_APP_API_KEY
    const articleData = await api_call(API_URL, 'GET')
    const articles = articleData?.articles
    const newArticles = articles.filter((article) => {
      return article.urlToImage != null
    })
    setCategorywiseNews(newArticles)
  }

  useEffect(() => {
      fetchCategoryWisenews(identifier)
  }, [])

  if (!categoryWiseNews) return

  return (
    <div>
      <div className=''>
        <h1 className='p-2 m-2 font-bold text-3xl'>{name}</h1>
        <div className='flex overflow-x-hidden '>
          <div className='flex '> 
            {categoryWiseNews.map((category) => 
              <NewsCart key={category.identifier} newsDetails={category} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryWiseContent