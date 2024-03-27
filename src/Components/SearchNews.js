import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/constants/constants'
import { search_api_url } from '../utils/apiHelper/apiUrl'
import api_call from '../utils/apiHelper/apiCall'
import Header from './Layer/Header'
import { ALL_IMAGE } from '../utils/constants/imageConstants'
import { dateFormat } from '../utils/helpers/dateHelper'
import { useDispatch } from 'react-redux'
import { addNewsDetails } from '../utils/store/slices/newsDetailsSlice'



const SearchNews = () => {
    const [articles, setArticles] = useState([])
    const [totalArticles, setTotalArticles] = useState(0)
    const { searchText } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRedirectToNesDetails = (newsDetails) => {
        dispatch(addNewsDetails(newsDetails))
        window.localStorage.setItem('newsDetails', JSON.stringify(newsDetails))
        navigate('/news-details')
      }

    const fetchArticles = async() => {
        const API_URL = BASE_URL + search_api_url + searchText + '&apiKey='+process.env.REACT_APP_API_KEY
        const articleData = await api_call(API_URL, 'GET')
        const articles = articleData?.articles
        const newArticles = articles.filter((article) => {
            return article.urlToImage != null
        })
        setArticles(newArticles)
        setTotalArticles(newArticles.length)
    }

    useEffect(() => {
        fetchArticles()
    }, [searchText])


  return (
    <div className=''>
        <Header />
        <div className='bg-gray-300 grid grid-cols-6 gap-4'>
            <div className='bg-white  py-2 my-2 mx-10 col-start-2 col-span-4'>
                <div className='p-2 m-2 border-b-2 border-b-gray-500'>
                    <p className='opacity-50 text-lg'>Showing {totalArticles} results for </p>
                    <div className='p-2 flex'>
                        <img className='w-20 h-20' src={ALL_IMAGE.search}></img>
                        <h1 className='text-3xl p-2 m-2 opacity-80'>{searchText}</h1>
                    </div>
                </div>
                {articles.length > 0 ? (
                    articles.map((article) =>
                        <div key={article.title} className='border-b-2 border-b-gray-500'>
                            <div className='flex py-2 m-2 bg-white cursor-pointer' onClick={() => handleRedirectToNesDetails(article)}>
                                <img className='w-48 rounded-lg' src={article.urlToImage} />
                                <h1 className='p-2 m-2 text-xl font-bold hover:opacity-50'>{article.title}</h1>
                            </div> 
                            <div className='px-2 mx-8 my-4'>
                                <p className='text-lg'>{dateFormat(article.publishedAt)}</p>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="text-center mt-4">
                        <img className='w-96 mx-auto my-4' src={ALL_IMAGE.no_result_found} alt="No result found"></img>
                        <p className='text-3xl'>No result found, try with other keywords</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default SearchNews