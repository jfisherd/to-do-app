import React from "react";
import type { ToDoContextType } from "../types/types";
import { createContext } from "react";
import { ReactNode } from "react";

// value={{ addToDo, toggleToDo, deleteToDo, editToDo, clearCompleted}}

export const ThemeContext = React.createContext('light'); // Theme section of Lesson 5 emulated here

export const ToDoContext = React.createContext(undefined)

export function ToDoProvider() {
    const addToDo = React.createContext(() => {/* add new to do item */ })
    const toggleToDo = React.createContext(() => {/* toggle completed boolean */ })
    const deleteToDo = React.createContext(() => {/* delete to do item */ })
    const editToDo = React.createContext(() => {/* edit to do item */ })
    const clearCompleted = React.createContext(() => {/* delete completed to do items */ })

    const toDoContextObject = {
        todos: [],
        addToDo,
        toggleToDo,
        deleteToDo,
        editToDo,
        clearCompleted
    }

    return (
        <ToDoContext.Provider value= { toDoContextObject } >

        < ToDoContext.Provider />
    )
}