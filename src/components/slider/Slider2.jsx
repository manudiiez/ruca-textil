import React from 'react'
import "./slider2.css"
 import { motion } from 'framer-motion'

const Slider2 = ({ base, prints }) => {
  return (
    <div id='sliderStamp'>
      <div className='oval'></div>
      <motion.div className='sliderContainer'>
        <img className='a1' src={base} alt="" />
        <motion.div className='slider' drag="x" dragConstraints={{ right: 820, left: -820 }}>
          {
            prints.map(img => (
              <motion.div key={img} className='item'>
                <img src={img} alt="" />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      <div className='oval2'></div>
    </div>
  )
}

export default Slider2