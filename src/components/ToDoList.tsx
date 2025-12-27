import { ToDoContext } from "../contexts/ToDoContext"
import type { ToDo } from "../types/types"
import { ToDoListItem } from "./ToDoListItem"
import { useContext } from "react"

export function ToDoList() {

    const listArrayConsumed:ToDo[] = useContext(ToDoContext)

    return (
        <>
            <ul>
                {listArrayConsumed.map((item) => <ToDoListItem
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    dateAdded={item.dateAdded}
                    dateDue={item.dateDue}
                    completed={item.completed}
                    key={item.id}
                />)}
            </ul>
        </>
    )
}