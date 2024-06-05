import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"Text Message",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export default function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider