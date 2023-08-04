import React from 'react'
import '../styles/Testimonial.css'
import Heading from './Heading'
import clientImage from '../assets/client.png'

const Testimonial = (id) => {
    const testimonal = [
        {
            id: 1,
            name: "NATASHA KELVIN",
            post: "DESIGNER",
            desc: "“Did an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.”",

        },
        {
            id: 2,
            name: "ROGER SCOTT",
            post: "MARKETING MANAGER",
            desc: "“Leverage agile frameworks to provide a robust synopsis for high level overviews ”",

        },
        {
            id: 3,
            name: "JOHN DOE",
            post: "TECHNICAL LEAD",
            desc: "“Working with RecruitHub was a game changer for our organization. Their professionalism and expertise made the recruitment process seamless and effecient.”",

        },
    ]
    return (
        <>
            <section className='testimonal padding' id={id}>
                <div className='container'>
                    <Heading subtitle='TESTIMONIAL' title='What Our Client Says?' />

                    <div className='content grid2'>
                        {testimonal.map((val) => (
                            <div className='items shadow'>
                                <div className='box flex'>
                                    <div className='img'>
                                        <img src={clientImage} alt='' />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className='name'>
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial