import React from 'react'
import './banner.css'

const Banner = ({image}) => {
    return (
        <div id='banner'>
            <img src={image} alt="" />
        </div>
    )
}

export default Banner