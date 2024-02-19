import React from 'react'
import { motion } from 'framer-motion';

const AirBnbCatCard = ({logo, text}) => {
  return (
    <motion.div 
      className='flex flex-col p-4 items-center'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src={`assets/${logo}.jpg`} 
        alt={logo} 
        width={26} 
        height={26}
        className=''
      />
      <motion.p 
        className='mt-1 font-semibold text-xs text whitespace-nowrap'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.p>
    </motion.div>
  )
}

export default AirBnbCatCard
