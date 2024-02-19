import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button
            className='bg-green-400 rounded-full p-2'
        >
            {props.text}
        </button>
    </div>
  )
}

export default Button