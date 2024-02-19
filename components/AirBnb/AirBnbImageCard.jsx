import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '@components/Carousel'

const AirBnbImageCard = ({ images, place, rating, distance, dates, price }) => {
  return (
    <motion.div className='flex flex-col' initial={{ opacity: 0, y:-20 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 1 }}>

      <Carousel>
        <img className='h-64 w-full object-cover' src={`assets/${images[0]}.webp`} alt='airbnb' />
        <img className='w-full h-64 object-cover' src={`assets/${images[1]}.webp`} alt='airbnb' />
        <img className='w-full h-64 object-cover' src={`assets/${images[2]}.webp`} alt='airbnb' />
        <img className='w-full h-64 object-cover' src={`assets/${images[3]}.webp`} alt='airbnb' />
      </Carousel>


      <div className='flex justify-between px-1 mt-1'>
        <p className='font-xl font-medium'>{place}</p>
        <div className='flex justify-between gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>


          <p className='font-xl font-medium'>{rating}</p>
        </div>

      </div>
      <div className='px-1'>
        <p className='text-sm font-medium text-gray-700'>{distance} kilometers away</p>
        <p className='text-sm font-medium text-gray-700'>{dates}</p>
        <p className='text-md font-medium text-gray-800'>$ {price} night</p>
      </div>
    </motion.div>
  )
}

export default AirBnbImageCard