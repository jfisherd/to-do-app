import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToDoContext } from './contexts/ToDoContext.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>,
)
