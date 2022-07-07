import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
// import { reviewData } from '../../UiData'


const Review = ({ Review }) => {

    const [index, setIndex] = useState(0);

    const checkNumber = (number) => {
        if (number >= Review.length) {
            return 0
        }
        if (number < 0) {
            return Review.length - 1
        }
        return number
    }
    const nextReview = () => {

        setIndex((count) => {
            const newIndex = count + 1
            return checkNumber(newIndex)
        })
    }
    const prevReview = () => {
        setIndex((count) => {
            const newIndex = count - 1
            return checkNumber(newIndex)
        })

    }



    return (
        <article className='Review'>
            <div className='Review-con'>
                <FaQuoteRight
                    className='quote'
                />
                <p className='text'> {Review[index].content}
                </p>
                <p className='name'>- {Review[index].name}
                </p>
            </div>
            <div className='navigation'>
                <FaChevronLeft
                    className='fa left'
                    onClick={prevReview}
                />
                <FaChevronRight
                    className='fa right'
                    onClick={nextReview}
                />
            </div>
        </article>
    )
}

export default Review