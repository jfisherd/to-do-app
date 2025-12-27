import { ToDoListItem } from "./ToDoListItem"


export function ToDoList() {

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