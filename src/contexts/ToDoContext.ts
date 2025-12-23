import React from "react";
import { createContext } from "react";
import { ReactNode } from "react";

//   function addToDo() {
//     // add new to do item
//   }

//   function toggleToDo() {
//     // toggle completed boolean
//   }

//   function deleteToDo() {
//     // delete to do item
//   }

//   function editToDo() {
//     // edit to do item
//   }

//   function clearCompleted() {
//     // delete completed to do items
//   }




export const ThemeContext = React.createContext('light'); // Theme section of Lesson 5 emulated here

export function ToDoContext() {
    const addToDo = React.createContext(() => { })
    const toggleToDo = React.createContext(() => { })
    const deleteToDo = React.createContext(() => { })
    const editToDo = React.createContext(() => { })
    const clearCompleted = React.createContext(() => { })

    return (
        <></>
    )
}