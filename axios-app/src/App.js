import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import './template/css/admin.css';
import './template/css/bootstrap.min.css';

import Home from './views/Home';


const App = () => {
  

  return (
    <div className='App'>
      <Home />
      {/* <Profile/>
      <Edit/>
      <Create/>
      <EmployeeList/>
      <Search/> */}
    </div>
  )
}

export default App
