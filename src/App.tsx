import './App.css'
import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'

function App() {



  return (
    <>
      <div>MY DEV TEXT</div>
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