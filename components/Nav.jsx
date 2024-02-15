import Link from 'next/link'
import React from 'react'

const Nav = () => {
  const age = 20
  return (
    <div className='fixed top-0 w-full p-2 flex bg-slate-600 justify-end gap-4 text-white pr-8 z-30'>
      <Link href='/carousel'>Carousel</Link>
      <Link href='/airbnbUi'>AirBnb</Link>
      <Link href='/'>Home</Link>
      <Link href='/quill'>Quill</Link>
      <Link href='/signup'>SignUp</Link>
    </div>
  )
}

export default Nav