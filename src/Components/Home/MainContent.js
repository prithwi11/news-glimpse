import React from 'react'

const MainContent = ({mainArticle}) => {
  return (
    <div className='p-2 my-2 relative w-3/4 cursor-pointer '>
        <div className='-z-20'>
            <img className='w-full rounded-lg' src={mainArticle.urlToImage} alt='main-content' />
        </div>    
        <div className='bottom-7 p-8 mx-3 bg-white z-50 absolute  text-wrap break-words opacity-90'>
            <h1 className='font-bold text-3xl p-2 mx-3'>{mainArticle.title}</h1>
            <h3>by - {mainArticle.author ? mainArticle.author : ''}</h3>
        </div>
    </div>
  )
}

export default MainContent