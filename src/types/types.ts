export interface ToDo {
    id: number
    title: string
    text: string
    dateAdded: string
    dateDue: string
    completed: boolean
}

export interface ToDoContextType {
    todos: ToDo[]
    addToDo: () => {}
    toggleToDo: () => {}
    deleteToDo: () => {}
    editToDo: () => {}
    clearCompleted: () => {}
}