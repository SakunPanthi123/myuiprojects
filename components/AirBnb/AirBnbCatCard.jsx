import React from 'react'

const AirBnbCatCard = ({logo, text}) => {
  return (
    <div className='flex flex-col p-4 items-center'>
        <img src={`assets/${logo}.jpg`} 
            alt={logo} 
            width={26} 
            height={26}
            className=''
        />
        <p className='mt-1 font-semibold text-xs text whitespace-nowrap '>{text}</p>
    </div>
  )
}

export default AirBnbCatCard

// notes:
// items-center is like cross axis alignment
// justify is like main axis alignment
// flex is used to set the row or column direction
// min-h is used to set the minimum height so that the card does not shrink