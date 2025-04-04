import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '..features/todos/todoSlice'


function Addtodo() {
    const[input,setInput]=useState('')
    // usedispatch hook
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
    }

  return (
    <div>
      
    </div>
  )
}

export default Addtodo
