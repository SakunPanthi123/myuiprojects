import Link from 'next/link'
import React from 'react'

const Nav = () => {
  const age = 20
  return (
    <div className='top-0 sticky w-full p-2 flex bg-slate-600 justify-end gap-4 text-white pr-8 z-30'>
      <Link href='/todo'>Todo New</Link>
      <Link href='/hamroKrishi'>Hamro Krishi</Link>
      <Link href='/gpu'>GPU</Link>
      <Link href='/todoapp'>Todo App</Link>
      <Link href='/carousel'>Carousel</Link>
      <Link href='/airbnbUi'>AirBnb</Link>
      <Link href='/quill'>Quill</Link>
      <Link href='/signup'>SignUp</Link>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default Nav