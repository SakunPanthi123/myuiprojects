import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='p-8 justify-start' style={{backgroundColor:'#F7F7F7'}}>
            <p  className='font-medium text-xl'>Inspiration for future getaways</p>

            <div className='flex whitespace-nowrap overflow-scroll hide-scrollbar pt-2'>
                <div className='mr-6 text-sm font-medium text-black border-b-2 border-black pb-2'>Privacy</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Arts & Culture</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Outdoors</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Mountains</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Beach</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Unique stays</div>
                <div className='mr-6 text-sm font-medium text-gray-700'>Categories</div>
            </div>
            <div className='grid grid-cols-2 border-t mt-4'>
                <div className='p-8'>
                    <p className='font-medium text-md'>Canmore</p>
                    <p className='text-sm text-gray-700'>Aparment rentals</p>
                </div>
                <div className='p-8'>
                    <p className='font-medium text-md'>Benalmadena</p>
                    <p className='text-sm text-gray-700'>Flat rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Hamburg</p>
                    <p className='text-sm text-gray-700'>Villa rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Bali</p>
                    <p className='text-sm text-gray-700'>Cottage rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Cape Town</p>
                    <p className='text-sm text-gray-700'>House rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Budapest</p>
                    <p className='text-sm text-gray-700'>Bungalow rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Bali</p>
                    <p className='text-sm text-gray-700'>Cottage rentals</p>
                </div>
                <div className='px-8 pb-8'>
                    <p className='font-medium text-md'>Show more</p>
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Footer