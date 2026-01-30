import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'

const App = () => {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>} />
      </Routes>
    </div>
  )
}

export default App