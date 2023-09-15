import { useState } from 'react'
import { ContactComponent } from './components/Contacts'
import { WelcomeComponet } from './components/welcome'
import { AboutComponent } from './components/About'
import { ExperenceComponent } from './components/Experence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
