import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/constants/constants'
import api_call from '../../utils/apiHelper/apiCall'
import { home_page_api_url } from '../../utils/apiHelper/apiUrl'
import NewsCart from './NewsCart'
import Slider from "react-slick";

const CategoryWiseContent = ({identifier, name}) => {
  const [categoryWiseNews, setCategorywiseNews] = useState(null)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", color : "black", fontSize: "32px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  const fetchCategoryWisenews = async(identifier) => {
    const API_URL = BASE_URL + home_page_api_url + '?country=in&category='+identifier+'&apiKey=' + process.env.REACT_APP_API_KEY
    const articleData = await api_call(API_URL, 'GET')
    const articles = articleData?.articles
    const newArticles = articles.filter((article) => {
      return article.urlToImage != null
    })
    setCategorywiseNews(newArticles)
  }

  useEffect(() => {
      fetchCategoryWisenews(identifier)
  }, [])

  if (!categoryWiseNews) return

  return (
    <div className='slider-container'>
        <h1 className='p-2 m-2 font-bold text-3xl'>{name}</h1>
       <Slider {...settings} className='p-4 mx-8'>
          {/* <div  className='flex overflow-x-hidden scroll-smooth' id='slider'> */}
            {categoryWiseNews.map((category) => 
              <NewsCart key={category.identifier} newsDetails={category} />
            )}
          {/* </div> */}
        </Slider>
      {/* <div className=''>
        <h1 className='p-2 m-2 font-bold text-3xl'>{name}</h1>
        <MdChevronLeft size={40} onClick={slideLeft} className='z-50 cursor-pointer' />         
            <div className='relative flex items-center w-full'>    
              <div  className='flex overflow-x-hidden scroll-smooth' id='slider'>
                {categoryWiseNews.map((category) => 
                  <NewsCart key={category.identifier} newsDetails={category} />
                )}
              </div>
            </div>
        <MdChevronRight size={40} onClick={slideRight} className='cursor-pointer'/>
      </div> */}
    </div>
  )
}

export default CategoryWiseContent