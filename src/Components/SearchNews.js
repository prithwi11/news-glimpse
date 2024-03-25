import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/constants/constants'
import { search_api_url } from '../utils/apiHelper/apiUrl'
import api_call from '../utils/apiHelper/apiCall'
import Header from './Layer/Header'



const SearchNews = () => {
    const [articles, setArticles] = useState({})
    const { searchText } = useParams()

    const fetchArticles = async() => {
        const API_URL = BASE_URL + search_api_url + searchText + '&apiKey='+process.env.REACT_APP_API_KEY
        const articleData = await api_call(API_URL, 'GET')
        const articles = articleData?.articles
        const newArticles = articles.filter((article) => {
            return article.urlToImage != null
        })
        setArticles(newArticles)
        console.log(newArticles)
    }

    useEffect(() => {
        fetchArticles()
    }, [searchText])


  return (
    <div className=''>
        <Header />
        <div className='bg-gray-300 grid'>
            <div className='bg-white w-1/2 py-2 my-2 mx-10 grid-cols-6'>
                {articles && articles.map((article) =>
                    <div className='flex p-2 m-2 bg-white'>
                        <img className='w-48' src={article.urlToImage} />
                        <h1 className='p-2 m-2'>{article.title}</h1>
                    </div> 
                )}
            </div>
        </div>
    </div>
  )
}

export default SearchNews