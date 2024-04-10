import React from 'react'
import { addNewsDetails } from '../../utils/store/slices/newsDetailsSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MainContent = ({mainArticle}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRedirectToNesDetails = () => {
    dispatch(addNewsDetails(mainArticle))
    window.localStorage.setItem('newsDetails', JSON.stringify(mainArticle))
    navigate('/news-details')
  }

  return (
    <div class="relative w-3/5 p-2 my-2">
    <div class=" w-full rounded-lg">
      <img class=" h-full w-full object-cover" src={mainArticle.urlToImage} alt="main-content" />
    </div>
    <div class="p-4">
      <h2 class="mt-2 mb-2  font-bold">{mainArticle.title}</h2>
      <p class="text-sm">{mainArticle.author ? `by - ${mainArticle.author}` : ''}</p>
    </div>
  </div>
  )
}

export default MainContent