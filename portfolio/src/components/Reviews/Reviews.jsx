import React, { useEffect, useReducer, useState } from 'react'
import Title from "../Title"
import Review from './Review'
import axios from "axios"


const reducer = (state, action) => {

    if (action.type === "LOADED_DATA") {

        let newReview = action.payload;
        // action.payload.map(item => newReview = [...state.review, item])

        return {
            ...state,
            review: newReview
        }
    }

    if (action.type === "ENABLE") {
        return {
            ...state,
            isReviewOpen: true
        }
    }
    if (action.type === "ADDED_REVIEW") {

        const newItem = [...state.review, action.payload]

        return {
            ...state,
            review: newItem,
            modalContent: "Added successfully",
            isModalOpen: true,
            isReviewOpen: false
        }
    }

    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false
        }
    }

}

const defaultState = {
    review: [
        {
            content: "Thanks",
            name: "Admin"
        }
    ],
    modalContent: "",
    isModalOpen: false,
    isReviewOpen: false
}

const Reviews = () => {

    const [reviewData, setReviewData] = useState(
        {
            content: "",
            name: ""
        }
    )

    const [state, dispatch] = useReducer(reducer, defaultState)

    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        axios.get("https://portfolio-review.herokuapp.com")
            .then(response => {
                console.log(response.data)

                setLoadedData(response.data)
            })
            .catch(err => {
                console.log("error from fetching data", err)
            })
    }, [])

    useEffect(() => {
        if (loadedData.length !== 0) {
            dispatch({
                type: "LOADED_DATA",
                payload: loadedData
            })
        }
    }, [loadedData])


    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        //axios// started fetching data

        axios.post("https://portfolio-review.herokuapp.com", { reviewData })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log("Cannot fetch", error)
            })

        //End of data fetching

        if (reviewData) {

            dispatch({ type: "ADDED_REVIEW", payload: reviewData })
            setReviewData({
                content: "",
                name: ""
            })
        }
        else {
            dispatch({ type: "NO_ITEM" })
        }

        console.log(state.review)
        setTimeout(() => { closeModal() }, 3000)
    }

    const AddReview = () => {
        dispatch({ type: "ENABLE" })
    }


    return (
        <div className='Reviews' id='reviews'>
            <Title title="Reviews" />
            <p className='Head'>Reviews from viewers</p>
            <Review Review={state.review} />

            {state.isModalOpen && <div className='modal'><p>{state.modalContent}</p></div>}

            {!state.isReviewOpen && <button
                className='AddReviewBtn'
                onClick={AddReview}
            >Add a Review</button>}

            {state.isReviewOpen &&
                <div className='AddItem'>
                    <form onSubmit={HandleSubmit}>
                        <label htmlFor='name' >Name*</label>

                        <input type="text"
                            required
                            className='input n1'
                            name="name"
                            onChange={(e) => {
                                setReviewData({
                                    ...reviewData,
                                    name: e.target.value
                                })
                            }}
                            value={reviewData.name}
                        />
                        <label htmlFor='review' >Your Review*</label>

                        <textarea
                            required
                            type="text"
                            className='input n3'
                            value={reviewData.review}
                            name='content'
                            onChange={(e) => {
                                setReviewData(
                                    {
                                        ...reviewData,
                                        content: e.target.value
                                    }
                                )
                            }}
                            maxLength="400"
                        />

                        <button>SEND</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Reviews