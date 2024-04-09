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
    <div class="w-full p-4">
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" />
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src={newsDetails.urlToImage} alt="" />
        </div>
        <div class="p-4">
          <h2 class="mt-2 mb-2  font-bold">{newsDetails.title}</h2>
          <p class="text-sm">{newsDetails.description}</p>
        </div>
      </div>
//     <div class="max-w-sm bg-white border border-white rounded-lg shadow h-[500px] ">
//     <div class="h-[200px]">
//         <img class="rounded-t-lg w-full h-full object-cover" src={newsDetails.urlToImage} alt="" />
//     </div>
//     <div class="p-5 dark:bg-gray-800 dark:border-gray-700 h-[300px]">
//         <a href="#">
//             <h5 class="mb-2 text-lg  tracking-tight text-gray-900 dark:text-white">{newsDetails.title}</h5>
//         </a>
//         {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{newsDetails.description}</p> */}
//         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>


    // <div className='group w-1/5 pr-4 min-w-[500px] p-4 mx-2 relative cursor-pointer rounded-xl ' onClick={handleRedirectToNesDetails}>
    //     <img className='aspect-square rounded-xl group-hover:opacity-50 transition-opacity duration-300' alt='moviecard' src={ newsDetails.urlToImage }></img>
    //     <div className='absolute  bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300'></div>
    //     <div className='w-2/3 bottom-7 p-2 mx-3 bg-white z-50 absolute  opacity-90 border-2 border-black'>
    //         <h1 className='font-bold text-sm p-2 mx-3'>{newsDetails.title}</h1>
    //         <h3>{newsDetails.author ? `by - ${newsDetails.author}` : ''}</h3>
    //     </div>
    // </div>
  )
}

export default NewsCart