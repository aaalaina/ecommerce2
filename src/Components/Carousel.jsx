import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from '../images';

export default function Carousel() {
    const [width, setWidth] = useState(0);
    const Carousel = useRef();
    useEffect (() => {
       // console.log(Carousel.current.scrollWidth, Carousel.current.offsetWidth);
        setWidth(Carousel.current.scrollWidth - Carousel.current.offsetWidth)
    }, [])
  return (
    <div>
        <motion.div ref={Carousel} className='Carousel' whileTap={{cursor: 'grabbing'}}>
            <motion.div drag='x' dragConstraints={{right: 0, left: - width}} className='innerCarousel'>
                {/* img loop */}
                {images.map(image =>{
                    return (
                        <motion.div className='item' key={image}>
                            <img src={image} alt="" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}

