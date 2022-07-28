import React, { useReducer, useState } from 'react'
import Title from "../Title"
import Review from './Review'
import axios from "axios"


const reducer = (state, action) => {
    if (action.type === "ENABLE") {
        return {
            ...state,
            isReviewOpen: true
        }
    }
    if (action.type === "ADDED_REVIEW") {
        const newReview = [...state.review, action.payload]
        return {
            ...state,
            review: newReview,
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
            content: "ojIntook a  galley of type and scrambled it e industds to",
            name: "Paul Anita"
        },
        {
            content: "odnterview Preparation for Programming Roles nterview Preparation for Programming Roles nterview Preparation for Programming Rolesex.js",
            name: "Agbal ia"
        },
        {
            content: "ong you need to kno o ignore, add eslSearch for the keywords to learn more about each waw about funding, growing and scalec.js",
            name: "Oluwaseyi Anita"
        },
        {
            content: "ojecLo arch for the keywords to learn more about each warning.rem Ipsum has been the industry'ss",
            name: "Vesss Looker"
        }
    ],
    modalContent: "",
    isModalOpen: false,
    isReviewOpen: false
}

const Reviews = () => {

    const [reviewData, setReviewData] = useState({
        content: "",
        name: ""
    })

    const [state, dispatch] = useReducer(reducer, defaultState)

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        //axios// started fetching data

        axios.post("https://mynodeproject22.herokuapp.com/notes", {reviewData})
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