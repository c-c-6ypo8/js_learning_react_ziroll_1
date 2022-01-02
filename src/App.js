import './App.css'
import { Interests } from './components/Interests'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Info } from './components/Info'

const App = () => {
  return (
    <div className='card'>
      <main>
        <Info />
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}

export default App
