import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import newsDetailsSlice from '../../utils/store/slices/newsDetailsSlice'
import { addNewsDetails } from '../../utils/store/slices/newsDetailsSlice'
import { useNavigate } from 'react-router-dom'

const NewsCart = ({newsDetails}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleRedirectToNesDetails = () => {
    dispatch(addNewsDetails(newsDetails))
    window.localStorage.setItem('newsDetails', JSON.stringify(newsDetails))
    navigate('/news-details')

  }

  return (
    <div className='group w-1/4 pr-4 min-w-[500px] p-4 mx-2 relative cursor-pointer rounded-xl ' onClick={handleRedirectToNesDetails}>
        <img className='aspect-square rounded-xl group-hover:opacity-50 transition-opacity duration-300' alt='moviecard' src={ newsDetails.urlToImage }></img>
        <div className='absolute  bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300'></div>
        <div className='w-2/3 bottom-7 p-2 mx-3 bg-white z-50 absolute  opacity-90'>
            <h1 className='font-bold text-sm p-2 mx-3'>{newsDetails.title}</h1>
            <h3>{newsDetails.author ? `by - ${newsDetails.author}` : ''}</h3>
        </div>
    </div>
  )
}

export default NewsCart