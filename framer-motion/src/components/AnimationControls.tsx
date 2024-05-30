'use client'
import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'
const AnimationControls = () => {
    const flipControls = useAnimationControls()
    const handleClick =()=>{
        flipControls.start("flip")
    }
  return (
    <div
    style={{
        display:'grid',
        placeContent:'center',
        height:'100vh',
        gap:"0.8rem"
    }}
    >
        <button 
        onClick={handleClick}
        className='example-button'>Flip it!</button>
        <motion.div
        style={{
            height:150,
            width:150,
            background:"black"
        }}
        variants={{
            initial:{
                rotate:'0deg'
            },
            flip:{
                rotate:"360deg"
            }
        }}
        // whileHover="flip"
        initial="initial"
        animate={flipControls}
        ></motion.div>
    </div>
  )
}

export default AnimationControls