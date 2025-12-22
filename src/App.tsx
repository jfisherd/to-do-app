import './App.css'
import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'
import { ToDoListItem } from './components/ToDoListItem'

function App() {

  return (
    <>
      <ToDoInput />
      <ToDoList>
        {/* 
        <ToDoListItem />
        <ToDoListItem />
        <ToDoListItem /> 
        */}
      </ToDoList>
    </>
  )
}

export default App