'use client'
import {useState} from 'react'
import Form from '@components/Form'

const Home = () => {
 

    const [form, setForm] = useState({
      username:'',
      password:''
    })
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form)
    }
    const name = 'Sakun'
  return (
    <div className='flex p-8 min-h-96'>
     <div className='my-auto text-xl font-medium'>
        Hello and welcome to my website that showcases my various UI projects.
        I made this website to showcase my UI projects and to learn Next.js.
        I made login and signup forms using Tailwind CSS and React components system to
        make them reusable. I also made a carousel. Most amazingly, I recreated the entire Airbnb landing page using Tailwind CSS.
     </div>
    </div>
  )
}

export default Home