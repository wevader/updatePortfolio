import './App.css'

import {Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/navMain/NavBar'
import Introduction from './components/introduction/introduction'

function App() {
  

  return (
    <>
      <body id='body'>
        <NavBar/> 
        <Introduction/>
        <Routes>
        <Route/>
        <Route path='*' elemen={Navigate} to="/"/>
      </Routes>
      </body>
      

    </>
  )
}

export default App
