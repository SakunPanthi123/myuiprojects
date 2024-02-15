'use client'
import {useState} from 'react'
import Form from '@components/Form'

const Home = () => {
 
    const [count, setCount] = useState(0)


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
    <div className='flex min-h-screen'>
      <Form 
        title='Login' 
        button_color='#7A5BB3' 
        button_text='Login'
        non_button_text='Register'
      />
    </div>
  )
}

export default Home