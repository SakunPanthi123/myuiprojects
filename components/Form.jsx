const Form = ({title, button_color, button_text, non_button_text}) => {
  return (
    <div className="p-10 border-gray-600 shadow-xl rounded-md border flex flex-col mx-auto my-auto">
    <form className="flex flex-col">
      <h1 className="text-center font-sans text-2xl">{title}</h1>
      <label>Username</label>
      <input className="w-96 border rounded-md border-gray-600 mt-2 p-2" type='text' />
      <label className="mt-2">Password</label>
      <input className='w-96 border rounded-md border-gray-600 mt-2 p-2' type='password' />
      <div className="flex justify-between mt-3">
        <button className="rounded-md text-white py-2 px-4" style={{backgroundColor:button_color}} type='submit'>{button_text}</button>
        <button type='submit' style={{color:'#7A5BB3'}}>{non_button_text}</button>
      </div>
    </form>
    </div>

  )
}

export default Form

