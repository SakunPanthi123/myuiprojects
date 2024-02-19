import React from 'react'
import Button from './button'

const card = (props) => {
  return (
    <div className='text-xl p-8 w-48'>
        <div className='border rounded-md p-3'>
            <div className='text-center'>
                {props.name}
            </div>
            <div className='text-center'>
                {props.age}
            </div>
            <div className='flex justify-center'>
                <Button 
                    
                    text="Click me"
                />
            </div>
        </div>
    </div>
  )
}

export default card