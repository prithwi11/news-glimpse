import React from 'react'
import {  useDispatch } from 'react-redux'
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
    <div class="w-full p-4">
        <div class="relative pb-48 overflow-hidden cursor-pointer">
          <img class="absolute inset-0 h-full w-full object-cover" src={newsDetails.urlToImage} alt="" />
        </div>
        <div class="p-4">
          <h2 class="mt-2 mb-2  font-bold">{newsDetails.title}</h2>
          <p class="text-sm">{newsDetails.description}</p>
        </div>
      </div>
  )
}

export default NewsCart