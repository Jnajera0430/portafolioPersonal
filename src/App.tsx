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
import { useEffect } from 'react'
function App() {
  const { typeAlert, isOpen, handleIsOpen,handleTypeAlert } = UseContext();
  useEffect(() => {
    let time: number = 0;
    if (typeAlert == TypeAlert.SUCCESS) {
      time = 3000;
    } else {
      time = 10000;
    }
    const idTimer = setTimeout(() => {
      handleIsOpen(false);
    }, time)
    return () => clearTimeout(idTimer)
  }, [typeAlert]);

  useEffect(()=>{
    if(!isOpen){
      handleTypeAlert(TypeAlert.NEUTRO);
    }
    return;
  },[isOpen]);
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
        typeAlert == TypeAlert.SUCCESS && isOpen && (
          <SucessAlert />
        )
      }
      {
        typeAlert == TypeAlert.DANGER && isOpen && (
          <DangerAlert />
        )
      }
    </div>
  )
}

export default App
