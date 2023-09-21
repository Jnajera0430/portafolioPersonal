import { ContactComponent } from './components/Contacts'
import { WelcomeComponet } from './components/Welcome'
import { AboutComponent } from './components/About'
import { ExperenceComponent } from './components/Experence'
import { Navbar } from './components/NavBar'
import './index.css'
import { UseContext } from './api/hook/UseContext'
import { TypeAlert } from './constants/alertEnum'
import { SucessAlert } from './miniComponent/SuccessAlert.mini'
import { DangerAlert } from './miniComponent/DangerAlert.mini'
function App() {
  const {typeAlert} = UseContext()
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div id='welcome'>
        <WelcomeComponet />
      </div>
      <div id='about'>
        <AboutComponent />
      </div>
      <div id='experence'>
        <ExperenceComponent />
      </div>
      <div id='contact'>
        <ContactComponent />
      </div>
      {
        typeAlert == TypeAlert.SUCCESS && typeAlert &&(
          <SucessAlert/>
        )
      }
      {
        typeAlert == TypeAlert.DANGER && typeAlert &&(
          <DangerAlert/>
        )
      }
    </div>
  )
}

export default App
