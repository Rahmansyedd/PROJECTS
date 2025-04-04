import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[{id:1, text :"helloworld"}]}

export const todoSlice =createSlice({
    name :'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                 text : action.payload  
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        },
        deleteTodo:(state,action)   =>{
            const todo ={
                id:nanoid(),
                delete :action.payload
            }
        },
 
     
    }
})

export const {addTodo,removeTodo,deleteTodo,} = todoSlice.actions

export default todoSlice.reducer
    