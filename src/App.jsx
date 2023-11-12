import './App.css'

import {Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/navMain/NavBar'

function App() {
  

  return (
    <>
      <body id='body'>
        <NavBar/> 
        <Routes>
        <Route/>
        <Route path='*' elemen={Navigate} to="/"/>
      </Routes>
      </body>
      

    </>
  )
}

export default App
