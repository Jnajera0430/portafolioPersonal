import { ContactComponent } from './components/Contacts'
import { WelcomeComponet } from './components/Welcome'
import { AboutComponent } from './components/About'
import { ExperenceComponent } from './components/Experence'
import { Navbar } from './components/NavBar'

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <WelcomeComponet/>
        </div>
        <div>
          <AboutComponent/>
        </div>
        <div>
          <ExperenceComponent/>
        </div>
        <div>
          <ContactComponent/>
        </div>
      </div>
    </>
  )
}

export default App
