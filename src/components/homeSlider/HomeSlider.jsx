import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"

import './homeSlider.css'

import portada from '../../assets/portada final.png'


const HomeSlider = () => {

    return (
        <div id='homeSlider'>
            <img src={portada} alt="" />
        </div>
    )
}

export default HomeSlider
