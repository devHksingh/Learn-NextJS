'use client'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

const Gestures = () => {
  return (
    <div
    style={{
        display:'grid',
        placeContent:"center",
        height:"100vh",
        gap:"0.8rem"
    }}
    >
        <MotionConfig
        transition={{
            duration:0.25,
            ease:"easeInOut"
        }}
        >
        <motion.button 
        whileHover={{
            scale:1.05
        }}
        whileTap={{
            scale:0.95,
            rotate:"2.5deg"
        }}
        
        className='example-button'>
            Click me!
        </motion.button>
        <motion.button 
        whileHover={{
            scale:1.15
        }}
        whileTap={{
            scale:0.85,
            rotate:"-2.5deg"
        }}
        transition={{
            duration:0.125,
            ease:"easeInOut"
        }}
        style={{
            backgroundColor:"orangered"
        }}
        className='example-button'>
            Click me2!
        </motion.button>
        </MotionConfig>
    </div>
  )
}

export default Gestures