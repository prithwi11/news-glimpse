import { UseDispatch, useDispatch } from 'react-redux'
import { addNewsDetails } from '../../utils/store/slices/newsDetailsSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const useRedirectToNews = (newsDetails) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const redirectToNewsDetails = () => {
        dispatch(addNewsDetails(newsDetails))
        window.localStorage.setItem('newsDetails', JSON.stringify(newsDetails))
        navigate('/news-details')
    }

    useEffect(() => {
        redirectToNewsDetails()
    }, [])
}

export default useRedirectToNews
