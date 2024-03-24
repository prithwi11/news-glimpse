import React from 'react'

const NewsCart = ({image, author, title}) => {
  return (
    <div className='w-1/4 pr-4 min-w-[500px] p-4 mx-2 relative cursor-pointer rounded-xl border-black'>
        <img className='aspect-square rounded-xl ' alt='moviecard' src={ image }></img>
        <div className='w-2/3 bottom-7 p-2 mx-3 bg-white z-50 absolute  opacity-90'>
            <h1 className='font-bold text-sm p-2 mx-3'>{title}</h1>
            <h3>{author ? `by - ${author}` : ''}</h3>
        </div>
    </div>
  )
}

export default NewsCart