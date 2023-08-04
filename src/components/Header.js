import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo'>
                        <h1>RecruitHub</h1>
                        <span>Online Recruitment Portal</span>
                    </div>
                </div>
            </section>
            <header>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                        <li>
                            <Link to='#home'>Home</Link>
                        </li>
                        <li>
                            <Link to='#about'>About</Link>
                        </li>
                        <li>
                            <Link to='#testimonials'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to='#contact'>Contact</Link>
                        </li>
                    </ul>
                    <div className='start'>
                        <div className='button' style={{ cursor: 'pointer' }}>GET STARTED</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header