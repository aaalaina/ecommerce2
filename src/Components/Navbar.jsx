//rfce vs frc
import React from 'react';

import {motion} from 'framer-motion';
function navbar() {
  //let pathto = window.location.pathname;
  return (
    <div className='Navbar'>
        <div className='leftSide'>
            <div className='sitename'>
            <motion.h1 animate={{x: 250}}>ふわふわペット</motion.h1>
            </div>
        </div>
        <div className='rightSide'>
          <div className='alinks'>
                <button onClick={() => window.location.pathname = "/"}><a href="/">home</a></button>
                <button onClick={() => window.location.pathname = "/Products"}><a href="/Products">shop</a></button>
                <button onClick={() => window.location.pathname = "/Contact"}><a href="/Contact">contact us</a></button>
                <button onClick={() => window.location.pathname = "/FAQ"}><a href="/FAQ">Questions</a></button>
          </div>
        </div>
    </div>
  )
}

export default navbar
