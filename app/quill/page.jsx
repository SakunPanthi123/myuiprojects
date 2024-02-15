'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import {useState} from 'react'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


const Quill = () => {
    const [value, setValue] = useState('')

    
  return (
    <div className='px-10 mt-16'>
       
        <div className='h-48'>
        <ReactQuill theme='snow' value={value} onChange={setValue} />

        </div>
    </div>
  )
}

export default Quill