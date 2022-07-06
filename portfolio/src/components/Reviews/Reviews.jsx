import React from 'react'
import Title from "../Title"
import Review from './Review'

const Reviews = () => {
    return (
        <div className='Reviews' id='reviews'>
            <Title title="Reviews" />
            <p className='Head'>Reviews from viewers</p>
            <Review />
            <button>Add a Review</button>
        </div>
    )
}

export default Reviews