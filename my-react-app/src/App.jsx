import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CourseLocalStorage } from './CourseLocalStorage'
import { TaskLocalStorage } from './TaskLocalStorage'

function App() {

  return (
    <div className='App'>
      <Routes> 
          <Route path=':id' element={<TaskLocalStorage/>}/>
          <Route path='/' element={( <CourseLocalStorage/>)}/> 
      </Routes>
    </div>
  )
  
}

export default App
