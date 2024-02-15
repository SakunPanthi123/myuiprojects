import React from 'react'

const Contact = ({params}) => {
  
  return (
    <div>{params.age} and name is {params.name}</div>
  )
}

export default Contact