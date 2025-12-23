import { useState } from "react"
import { myBigList } from "../lib/toDos"
import { ToDoListItem } from "./ToDoListItem"
import type { ToDo } from "../types/types"

export function ToDoList() {

    const [listArray, setListArray] = useState<ToDo[]>(myBigList)

    return (
        <>
            <ul>
                {listArray.map((item) => <ToDoListItem
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    dateAdded={item.dateAdded}
                    dateDue={item.dateDue}
                    completed={item.completed}
                />)}
            </ul>
        </>
    )
}