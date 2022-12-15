import React from 'react'
import { motion } from 'framer-motion'
import './indumentariaSlider.css'
import { useNavigate } from 'react-router-dom'

const IndumentariaSlider = ({ prints }) => {

    const navigate = useNavigate()

    const open = (url) => {
        navigate('/productos/'+url)
    }

    return (
        <div id='indumentariaSlider'>
            <motion.div className='indumentariaSliderContainer'>
                <motion.div className='slider' drag="x" dragConstraints={{ right: 640, left: -640 }}>
                    {
                        prints.map((item, index) => (
                            <motion.div key={index} className='item' onClick={() => open(item.url)}>
                                <img src={item.src} alt="" />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div >
    )
}

export default IndumentariaSlider