'use client'
import {useState} from 'react'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  return (
    <div className='flex flex-col p-8'>
        Todo App
        <div>
          <input value={text} onChange={(e)=>setText(e.target.value)} type='text' className='border rounded-md p02'/>
          <button onClick={()=>{
            setTodos([...todos, text])
            setText('')
            }
            } className='bg-blue-400 rounded-full ml-2 p-2'>Add Todo</button>
        </div>
        <div>
          {todos.map((todo, index)=>{
            return <div key={index} className='grid grid-cols-2 gap-4'>
              <div>{todo}</div> 
              <div>
                <button onClick={ 
                  ()=>{
                    const newTodos = todos.filter((t,i)=>i!==index)
                    setTodos(newTodos)
                    
                  }

                } >Done</button>
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default TodoApp