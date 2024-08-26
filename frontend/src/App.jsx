import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
    </Routes>
  )
}

export default App