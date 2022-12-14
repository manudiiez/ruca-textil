import React from 'react'
import "./slider2.css"
import estampa1 from "../../assets/ESTAMPA1.png"
import estampa2 from "../../assets/ESTAMPA2.png"
import estampa3 from "../../assets/ESTAMPA3.png"
import estampa4 from "../../assets/ESTAMPA4.png"
import estampa5 from "../../assets/ESTAMPA5.png"
import estampa6 from "../../assets/ESTAMPA6.png"
import estampa7 from "../../assets/ESTAMPA7.png"
import mokshort from "../../assets/mokshort.png"
import { motion } from 'framer-motion'

const Slider2 = () => {
  return (
    <div id='sliderStamp'>
        <div className='oval'></div>
        <motion.div className='sliderContainer'>
          <img className='a1' src={mokshort} alt="" />
          <motion.div className='slider' drag="x" dragConstraints={{ right: 820, left: -820 }}>

            <motion.div className='item'>
              <img src={estampa1} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa2} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa3} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa4} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa5} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa6} alt="" />
            </motion.div>
            <motion.div className='item'>
              <img src={estampa7} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className='oval2'></div>
    </div>
  )
}

export default Slider2