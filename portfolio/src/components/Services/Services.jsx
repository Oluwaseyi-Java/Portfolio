import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Service from './Service'
import { ServiceData } from "../../UiData.js"

const Services = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        setState(ServiceData)
    }, [])
    const serves = state.map((serve) => {
        return (
            <Service
                key={serve.id}
                font={serve.font}
                title={serve.title}
                description={serve.description}
            />
        )
    })
    return (
        <div className='Services' id='services'>
            <Title title="Services" />
            <p>What can I do for you?</p>
            <div className='service-display'>
                {serves}
            </div>
        </div>
    )
}

export default Services