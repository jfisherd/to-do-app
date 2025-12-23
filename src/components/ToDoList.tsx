import { useState } from "react"
import { myBigList } from "../lib/toDos"
import { ToDoListItem } from "./ToDoListItem"
import type { ToDo } from "../types/types"

export function ToDoList() {

     const [listArray, setListArray] = useState<ToDo[]>(myBigList)

    

    return (
        <>
            <ul>
                {listArray.map(() => <ToDoListItem />)}
            </ul>
        </>
    )
}