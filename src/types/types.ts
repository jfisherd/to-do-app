export interface ToDo {
    id: number
    title: string
    text: string
    dateAdded: string
    dateDue: string
    completed: boolean
}

export interface ToDoContextType {  // OLD IDEAS, SEEMS WRONG BUT KEEP FOR REFERENCE -JF 12/26/2025
    todos: ToDo[]
    // addToDo: () => {}
    // toggleToDo: () => {}
    // deleteToDo: () => {}
    // editToDo: () => {}
    // clearCompleted: () => {}
}