import type { ToDo } from "../types/types"

export function ToDoListItem(toDoItem:ToDo) {

    function toggleToDo() {
        toDoItem.completed = !toDoItem.completed
    }

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