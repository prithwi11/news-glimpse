import React, {useState, useEffect} from 'react'
import Header from './Layer/Header'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/constants/constants'
import { home_page_api_url } from '../utils/apiHelper/apiUrl'
import api_call from '../utils/apiHelper/apiCall'
import NewsCart from './Home/NewsCart'
import { NEWS_CATEGORIES } from '../utils/constants/constants'

const NewsCategory = () => {
  const { categoryIdentifier } = useParams()
  const categoryName = NEWS_CATEGORIES.filter((category) => {
    return category.identifier == categoryIdentifier
  })
  const [articles, setArticles] = useState(null)
  
  const fetchArticles = async() => {
    const API_URL = BASE_URL + home_page_api_url + '?country=in&category='+categoryIdentifier+'&apiKey=' + process.env.REACT_APP_API_KEY
    const articleData = await api_call(API_URL, 'GET')
    const articles = articleData?.articles
    const newArticles = articles.filter((article) => {
      return article.urlToImage != null
    })
    setArticles(newArticles)
  }

  useEffect(() => {
    fetchArticles()    
  }, [categoryIdentifier])

  if (!articles) return
  return (
    <div>
      <Header />
        <div className='max-w-full '>
          <h1 className='p-2 m-2 font-bold text-3xl'>{categoryName[0]?.name}</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
              {articles.map((category) => 
                <NewsCart newsDetails={category} />
              )}
          </div>
        </div>
    </div>
  )
}

export default NewsCategory