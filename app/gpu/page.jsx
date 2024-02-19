// this is a UI page for buying the H100 GPU from Nvidia. The UI is made with Tailwind CSS. Amazing mordern UI.
// this UI uses framer motion component to make this UI more interactive and smooth.
'use client'
import { motion } from 'framer-motion'

const GPU = () => {
  return (
    <motion.div
      className='p-8'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-center'>
        <div className='w-full'>
          <motion.h1
            className='text-4xl font-bold'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nvidia H100
          </motion.h1>
          <motion.p
            className='text-lg text-gray-600'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The most powerful AI accelerator in the world
          </motion.p>
          <div className='flex gap-4 mt-8'>
            <div className='w-1/2'>
              <motion.img
                src='/assets/h100-og.jpg'
                alt='gpu'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </div>
            <div className='w-1/2'>
              <motion.h1
                className='text-2xl font-bold'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Features
              </motion.h1>
              <motion.ul
                className='list-disc list-inside'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  80GB HBM3 Memory
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  14,592 CUDA Cores
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  1.593 GHz Core Clock
                </motion.li>
              </motion.ul>
              <motion.div
                className='mt-4'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <motion.h1
                  className='text-2xl font-bold'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  Price
                </motion.h1>
                <motion.p
                  className='text-3xl font-bold'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  $47,880
                </motion.p>
                <motion.button
                  className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Buy Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GPU