import React from 'react'
import Heading from './Heading';
import '../styles/Hero.css'
import heroImage from '../assets/RH1.png'

const Hero = (id) => {
    return (
        <>
            <section className='hero' id={id}>
                <div className='container'>
                    <div className='row'>

                        <Heading subtitle='WELCOME TO RECRUITHUB' title='Find the Right Tech Talent' />
                        <p> Connect with top tech professionals and hire the best talent
                            for your company.</p>
                        <div className='button'>
                            <button className='primary-btn'>
                                GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <div className='margin'></div>
        </>
    )
}

export default Hero