import '../sass/style.css'
import Experience from './components/_Experience'
import Goals from './components/_Goals'
import NavBar from './components/_NavBar'
import Presentation from './components/_Presentation'
import Projects from './components/_Projects'

function App() {
  

  return (

      <div id='design'>
        <NavBar/>
        <Presentation/>
        <Experience/>
        <Goals/>
        <Projects/>
      </div>
  )
}

export default App
