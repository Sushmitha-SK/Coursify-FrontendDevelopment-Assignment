import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='legal'>
                <p>
                    <p>© {new Date().getFullYear()} RecruitHub. All rights reserved.</p>
                </p>
            </div>
        </>
    )
}

export default Footer