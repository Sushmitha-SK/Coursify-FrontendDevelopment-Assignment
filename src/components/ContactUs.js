import React from 'react'
import '../styles/ContactUs.css'
import contactImage from '../assets/RH3.png'

const ContactUs = (id) => {

    return (
        <>
            <section className='contacts padding' id={id}>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <img src={contactImage} alt='contact' />
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>New York NY 10016</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p> info@example.com</p>
                            </div>
                            <div className='box'>
                                <h4>PHONE:</h4>
                                <p> + 1235 2355 98</p>
                            </div>
                        </div>
                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs