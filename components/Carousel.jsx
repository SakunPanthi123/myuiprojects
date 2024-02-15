import { useState } from 'react'

const Carousel = ({ children: slides }) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='relative'>
      <div className='flex overflow-hidden rounded-md'>

        {slides[current]}
      </div>

      <div className='absolute top-28 p-2 w-full items-center flex justify-between'>
        <button onClick={() => current === 0 ? setCurrent(current) : setCurrent(current - 1)} className='bg-white rounded-full p-1 text-3xl font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

        </button>
        <button onClick={() => current === 3 ? setCurrent(current) : setCurrent(current + 1)} className='bg-white rounded-full p-1 text-3xl font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Carousel