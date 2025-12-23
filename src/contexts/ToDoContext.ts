import React from "react";
import { createContext } from "react";
import { ReactNode } from "react";



export const ThemeContext = React.createContext('light'); // Theme section of Lesson 5 emulated here

export function ToDoContext() {
    const addToDo = React.createContext(() => {/* add new to do item */})
    const toggleToDo = React.createContext(() => {/* toggle completed boolean */})
    const deleteToDo = React.createContext(() => {/* delete to do item */})
    const editToDo = React.createContext(() => {/* edit to do item */})
    const clearCompleted = React.createContext(() => {/* delete completed to do items */})

    return (
        <></>
    )
}