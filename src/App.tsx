import './App.css'
import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'
import { useState } from 'react'
import { myBigList } from './lib/toDos'               // Items to be listed
import type { ToDo } from './types/types'
import { ToDoContext } from './contexts/ToDoContext'

function App() {

  const [listArray, setListArray] = useState<ToDo[]>(myBigList)

  return (
    <>
      <ToDoContext.Provider value={listArray}>
        <div>MY DEV TEXT</div>
        <ToDoInput />
        <ToDoList />
        {/* 
        <ToDoListItem />
        <ToDoListItem />
        <ToDoListItem /> 
        */}
      </ToDoContext.Provider>
    </>
  )
}

export default App
