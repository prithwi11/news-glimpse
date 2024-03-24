import React from 'react'
import { ALL_IMAGE } from '../../utils/constants/imageConstants'
import { NEWS_CATEGORIES } from '../../utils/constants/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='absolute w-full bg-gray-800'>
      <div className='flex justify-between'>
        <img className='p-2 m-2 w-44' src={ALL_IMAGE.logo_header} alt="logo"/>
        <div className='right-0 p-2 my-4 mx-4'>
          <div className=''>
            <input type='text' className='p-2 m-2' placeholder='Search' />
            <button className='p-2 bg-red-600 text-white font-bold'>Search</button>
          </div>
        </div>
      </div>
      <div className='flex text-white font-bold'>
        <ul className='flex'>
          {NEWS_CATEGORIES.map((news_category) => 
            <li 
              className='p-2 m-2' 
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