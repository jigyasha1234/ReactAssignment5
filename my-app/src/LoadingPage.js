import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from "react-icons/ai";
const LandingPage = () => {

    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>10X Academy 04</h1>
                    <button>
                        <Link to="/posts">Team Members</Link>
                        <AiOutlineRight className='arrow' />

                    </button>
                </div>
            </div>
        </>
    )
}
export default LandingPage;