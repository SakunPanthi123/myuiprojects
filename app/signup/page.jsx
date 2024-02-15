import Form from '@components/Form'

const SignUp = () => {
  return (
    <div className='min-h-screen flex'>
        <Form 
        title='Sign Up' 
        button_color='green' 
        button_text='Sign Up'
        non_button_text='Login'
      />
      <Form 
        title='Hello' 
        button_color='red' 
        button_text='Hello Mom'
        non_button_text='See you'
      />
    </div>
  )
}

export default SignUp