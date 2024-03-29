import { useContext } from "react";
import React from "react";

export const TodoContext=React.createContext({
    todos:[
        {
            id:1,
            todo:"Todo MSG",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo =()=>{
    return useContext(TodoContext)
}

//Expoert Provider
export const TodoProvider=TodoContext.Provider