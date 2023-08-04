import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import ContactUs from '../components/ContactUs'

const Home = () => {
    return (
        <>
            <Hero id="home" />
            <About id="about" />
            <Testimonial id="testimonials" />
            <ContactUs id="contact" />
        </>
    )
}

export default Home