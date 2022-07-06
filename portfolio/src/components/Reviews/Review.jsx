import React, { useEffect, useState } from 'react'
import { FaQuoteRight, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { reviewData } from '../../UiData'


const Review = () => {

    const [review, setReview] = useState(reviewData)
    const [index, setIndex] = useState(2);

    useEffect(() => {
        setReview(reviewData)
    }, [])


    return (
        <article className='Review'>

            <div className='Review-con'>
                <FaQuoteRight className='quote' />
                <p className='text'> {review[index].content }</p>
                <p className='name'>- { review[index].name}</p>
            </div>
            <div className='navigation'>
                <FaArrowLeft 
                className='fa left' 
                onClick={(count)=>{
                    setIndex(count-1)
                }}
                />
                <FaArrowRight
                 className='fa right'
                 onClick={(count)=>{
                    setIndex(count+1)
                 }}
                  />
            </div>
        </article>
    )
}

export default Review