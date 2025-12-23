import { useContext, useState } from "react"
import { ToDoContext } from "../contexts/ToDoContext"

import type { ToDo } from "../types/types"

export function ToDoListItem(toDoItem:ToDo) {



    return (
        <>
                <li>
                    <h4>Title: {toDoItem.title}</h4>
                    <p>Date Posted: {toDoItem.dateAdded}</p>
                    <p>Date Due: {toDoItem.dateDue}</p>
                    <p>Description: {toDoItem.text}</p>
                    <input type='checkbox' onClick={toggleToDo}>Completed? {toDoItem.completed}</input>
                </li>
        </>
    )
}