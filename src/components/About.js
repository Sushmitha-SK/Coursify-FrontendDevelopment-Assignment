import React from 'react'
import '../styles/About.css'
import Heading from './Heading'
import aboutImage from '../assets/RH2.png'
import brandOne from '../assets/01.png'
import brandTwo from '../assets/02.png'
import brandThree from '../assets/03.png'
import brandFour from '../assets/04.png'
import brandFive from '../assets/05.png'

const About = (id) => {
    const homeAbout = [{
        id: 1,
        cover: "https://img.icons8.com/ios/50/approval--v1.png",
        title: "Verified Candidates",
        desc: "Our platform ensures that all candidates are thoroughly screened and verified.",
    },
    {
        id: 1,
        cover: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-global-business-and-management-kiranshastry-lineal-kiranshastry.png",
        title: "Global Reach",
        desc: "Connect with talent from all over the world to find the perfect match for your requirements.",
    },
    {
        id: 1,
        cover: "https://img.icons8.com/ios/50/popular-man.png",
        title: "Expert Support",
        desc: "Our team of experts is always ready to assist you in finding the right candidates.",
    },]


    return (
        <>
            <section className='aboutHome' id={id}>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src={aboutImage} alt='' />
                    </div>
                    <div className='right row'>
                        <Heading subtitle='RECRUITMENT PROCESS' title='What you get with RecruitHub recruitment process?' />
                        <div className='items'>
                            {homeAbout.map((val) => {
                                return (
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <img src={val.cover} alt='' />
                                        </div>
                                        <div className='text'>
                                            <h2>{val.title}</h2>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

            <section className='awrapper'>
                <div className='container grid'>
                    <div className='box flex'>
                        <div className='img'>
                            <img src={brandOne} alt='' />
                        </div>

                        <div className='img'>
                            <img src={brandTwo} alt='' />
                        </div>
                        <div className='img'>
                            <img src={brandThree} alt='' />
                        </div>
                        <div className='img'>
                            <img src={brandFour} alt='' />
                        </div>
                        <div className='img'>
                            <img src={brandFive} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About