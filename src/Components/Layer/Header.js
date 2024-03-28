import React, { useRef, useState, useEffect } from 'react'
import { ALL_IMAGE } from '../../utils/constants/imageConstants'
import { NEWS_CATEGORIES } from '../../utils/constants/constants'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const searchText = useRef(null)
  const param = useParams()
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    if(param && param.hasOwnProperty('categoryIdentifier')) {
      const {categoryIdentifier} = param
      const categoryName = NEWS_CATEGORIES.filter((category) => {
        return category.identifier == categoryIdentifier
      })
      setCategoryName(categoryName[0].name)
    } 
  }, [param])
  
  const handleSearchNews = () => {
    navigate('/search-news/'+searchText.current.value)
  }

  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <div className=' w-full bg-gray-800'>
      <div className='flex justify-between'>
        <Link to='/' className=''>
          <img className='p-2 m-2 w-44 cursor-pointer' src={ALL_IMAGE.logo_header} alt="logo"/>
        </Link>
        <div className='right-0 p-2 my-4 mx-4'>
          <div className=''>
            <input type='text' ref={searchText} className='p-2 m-2 rounded-lg' placeholder='Search' />
            <button className='p-2 bg-red-600 text-white font-bold rounded-sm' onClick={handleSearchNews}>Search</button>
          </div>
          <div>
          <button className='p-2 bg-red-600 text-white font-bold rounded-sm' onClick={handleLoginClick}>Sign in</button>
          </div>
        </div>
      </div>
      <div className='flex text-white font-bold'>
        <ul className='flex'>
        {NEWS_CATEGORIES.map((news_category) => 
            <li 
                className={`p-2 m-2 hover:text-red-600 ${categoryName === news_category.name ? 'text-red-600' : ''}`} 
                key={news_category.identifier}
            >
                <Link to={`/category/${news_category.identifier}`}>{news_category.name}</Link>
            </li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Header