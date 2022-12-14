import React from 'react'
import './homeSlider.css'

import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import c7 from '../../assets/c7.png'
import c8 from '../../assets/c8.png'


const HomeSlider = () => {

    return (
        <div id='homeSlider'>
            <div className="sliderTrack">
                <div className="slide">
                    <img src={c1} alt="" />
                </div>
                <div className="slide">
                    <img src={c2} alt="" />
                </div>
                <div className="slide">
                    <img src={c3} alt="" />
                </div>
                <div className="slide">
                    <img src={c4} alt="" />
                </div>
                <div className="slide">
                    <img src={c5} alt="" />
                </div>
                <div className="slide">
                    <img src={c6} alt="" />
                </div>
                <div className="slide">
                    <img src={c7} alt="" />
                </div>
                <div className="slide">
                    <img src={c8} alt="" />
                </div>
                {/* SAME SLIDE */}
                <div className="slide">
                    <img src={c1} alt="" />
                </div>
                <div className="slide">
                    <img src={c2} alt="" />
                </div>
                <div className="slide">
                    <img src={c3} alt="" />
                </div>
                <div className="slide">
                    <img src={c4} alt="" />
                </div>
                <div className="slide">
                    <img src={c5} alt="" />
                </div>
                <div className="slide">
                    <img src={c6} alt="" />
                </div>
                <div className="slide">
                    <img src={c7} alt="" />
                </div>
                <div className="slide">
                    <img src={c8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeSlider
