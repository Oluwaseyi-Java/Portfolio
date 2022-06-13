import React, { useState } from 'react'

const InputMessage = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })


    const HandleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className='InputMessage'>

            <form action='adeseyitu@gmail.com' onSubmit={HandleSubmit}>
            <label htmlFor='email' >Name*</label> 
                <input
                    className='input n1'
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor='email' >Email*</label> 
                <input
                className='input n2'
                type="e-mail"
                name="email"
                value={state.email}
                onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor='email' >Message*</label> 
                <textarea
                    className='input n3' />
                <button>SEND</button>
            </form>

        </div>
    )
}

export default InputMessage