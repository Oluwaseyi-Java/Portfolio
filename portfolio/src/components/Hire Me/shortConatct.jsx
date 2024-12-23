import React from 'react'
import { FaDownload } from "react-icons/fa"

const shortConatct = () => {
    return (
        <div className='ShortContact'>
            <p>Have any questions? React out to me from my contact form and I will get back to you shortly.</p>
            <div className='contact'>
                <p className='email'>Email:</p>
                <p className='address'>amiltontech.co@gmail.com</p>
            </div>
            <div className='cv'>
                <p className='text'>CV:</p>
                <button className='download_btn' onClick={() => {
                    window.location.href ="https://drive.google.com/file/d/14ULvlqOoVo9u30htq9EpzXunPzAJuPi2/view?usp=sharing"
                }}>
                    Download/View <FaDownload className='fa' />
                </button>
            </div>

        </div>
    )
}

export default shortConatct
