import React from 'react';
import './Postview.css';
// import components
import Post from './Post';
import data from './mock-data/api.json'
// camera icon
import { TiCameraOutline } from "react-icons/ti";

const Postview = () => {
    return (
        <div className="site-container">
            <div className="container">

                <div className="nav">
                    <div className="nav-container">
                        <img src="images/instaClone.png" alt="first" className='logo' />
                        <TiCameraOutline className='camera' />
                    </div>
                </div>
                {data.user.map((ele) => (
                    <Post about={ele} />

                ))}
            </div>
        </div>
    );
}

export default Postview;