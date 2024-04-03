import React, { useEffect, useState } from 'react'
import Header from '../Layer/Header'
import MainContent from './MainContent'
import CategoryWiseContent from './CategoryWiseContent'
import api_call from '../../utils/apiHelper/apiCall'
import { home_page_api_url } from '../../utils/apiHelper/apiUrl'
import { BASE_URL } from '../../utils/constants/constants'
import SubContent from './SubContent'

const Home = () => {
  const [articles, setArticles] = useState(null)
  
  const fetchArticles = async() => {
    const API_URL = BASE_URL + home_page_api_url + '?country=in&apiKey=' + process.env.REACT_APP_API_KEY
    const articleData = await api_call(API_URL, 'GET')
    const articles = articleData?.articles
    const newArticles = articles.filter((article) => {
      return article.urlToImage != null
    })
    setArticles(newArticles)
  }

  useEffect(() => {
    fetchArticles()    
  }, [])

  if (!articles) return

  return (
    <div className='body'>
      <Header />
      <div className='content z-50 '>
        <MainContent mainArticle={articles[0]} />
        <SubContent  />
      </div>
    </div>
  )
}

export default Home