import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateEmployeePage from './pages/CreateEmployeePage';

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-black'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addemployee' element={<CreateEmployeePage />} />
      </Routes>

    </div>
  )
}

export default App