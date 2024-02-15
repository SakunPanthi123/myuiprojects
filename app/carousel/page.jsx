'use client'
import React from 'react'
import Carousel from '@components/Carousel'

const CarouselPage = () => {
  return (
  
        <div className='w-96'>
          <Carousel>
              <img className='h-64 w-full object-cover' src='assets/img1.webp' alt='airbnb' />
              <img className='w-full h-64 object-cover' src='assets/img2.webp' alt='airbnb' />
              <img className='w-full h-64 object-cover' src='assets/img3.webp' alt='airbnb' />
              <img className='w-full h-64 object-cover' src='assets/img4.webp' alt='airbnb' />
          </Carousel>
        </div>
 
  )
}

export default CarouselPage