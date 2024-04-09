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
      <img class=" h-full w-full object-cover" src={mainArticle.urlToImage} alt="" />
    </div>
    <div class="p-4">
      <h2 class="mt-2 mb-2  font-bold">{mainArticle.title}</h2>
      <p class="text-sm">{mainArticle.author ? `by - ${mainArticle.author}` : ''}</p>
    </div>
  </div>
    // <div className='p-2 my-2 relative w-3/4 cursor-pointer ' onClick={handleRedirectToNesDetails}>
    //     <div className='-z-20'>
    //         <img className='w-full rounded-lg' src={mainArticle.urlToImage} alt='main-content' />
    //     </div>    
    //     <div className='bottom-7 p-8 mx-3 bg-white z-50 absolute  text-wrap break-words opacity-90 border-2 border-black'>
    //         <h1 className='font-bold text-3xl p-2 mx-3'>{mainArticle.title}</h1>
    //         <h3>{mainArticle.author ? `by - ${mainArticle.author}` : ''}</h3>
    //     </div>
    // </div>
  )
}

export default MainContent