import { myBigList } from "../lib/toDos"
import { ToDoListItem } from "./ToDoListItem"

export function ToDoList() {

    const listArray = myBigList

    return (
        <>
            <ul>
                {listArray.map(() => <ToDoListItem />)}
            </ul>
        </>
    )
}