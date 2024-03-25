import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import Header from '../Layer/Header'

const NewsDetails = () => {
    let newsDetails = useSelector((store) => store.newsDetails.newsDetails)
    if (!newsDetails) newsDetails = JSON.parse(window.localStorage.getItem('newsDetails'))
  return (
    <div>
        <Header />
        <div className='h-screen justify-center items-center w-3/5'>
            <div className='p-2 m-2'>
                <h1 className='font-bold text-3xl '>{newsDetails?.title}</h1>
                <p className='py-2 opacity-60'>{newsDetails?.source?.name} | {newsDetails?.publishedAt}</p>
            </div>        
            <div className='p-2 m-2 rounded-xl'>
                <img className='w-screen' src={newsDetails?.urlToImage}></img>
            </div>
            <div className='p-2 m-2 text-xl'>
                <p>{newsDetails?.content}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsDetails