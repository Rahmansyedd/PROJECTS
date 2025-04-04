import {configureStore} from '@reduxjs/toolkit'
import todoReduser from '..feature/todo/todoSlice' 
import { todoSlice } from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer : todoReduser,
    
    
    
})