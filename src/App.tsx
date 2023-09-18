import { ContactComponent } from './components/Contacts'
import { WelcomeComponet } from './components/Welcome'
import { AboutComponent } from './components/About'
import { ExperenceComponent } from './components/Experence'
import { Navbar } from './components/NavBar'
import './index.css'
function App() {

  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <div id='welcome'>
          <WelcomeComponet/>
        </div>
        <div id='about'>
          <AboutComponent/>
        </div>
        <div id='experence'>
          <ExperenceComponent/>
        </div>
        <div id='contact'>
          <ContactComponent/>
        </div>
      </div>
    </>
  )
}

export default App
