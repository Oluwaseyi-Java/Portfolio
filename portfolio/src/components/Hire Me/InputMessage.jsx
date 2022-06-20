import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

const InputMessage = () => {

    const formRef =useRef()
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const HandleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t57visu', 'template_j6050ag', formRef.current, 'HBdnGMEy06FusMmtz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log(data)
        setData({
            name: "",
            email: "",
            message: ""
        })

    }

    // const HandleChange = (e) => {
    //     e.preventDefault();


    //     const { name1, email1, message1 } = e.target.name;


    //     setData({
    //         [name1]: name1 ? e.target.value : '',
    //         [email1]: email1 ? e.target.value : "",
    //         [message1]: message1 ? e.target.value : ""
    //     })
    // }

    return (
        <div className='InputMessage'>

            <form action='adeseyitu@gmail.com' onSubmit={HandleSubmit} ref={formRef}>
                <label htmlFor='name' >Name*</label>
                <input
                    required
                    className='input n1'
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData({
                        ...data,
                        name: e.target.value,

                    })}
                />
                <label htmlFor='email' >Email*</label>
                <input
                    required
                    className='input n2'
                    type="e-mail"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData({
                        ...data,
                        email: e.target.value.trim(),

                    })}
                />
                <label htmlFor='message' >Message*</label>
                <textarea
                    required
                    className='input n3'
                    name='message'
                    value={data.message}
                    onChange={(e) => setData({
                        ...data,
                        message: e.target.value
                    })}
                />
                <button>SEND</button>
            </form>

        </div>
    )
}

export default InputMessage