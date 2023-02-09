import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { About, Contact, Header, Projects, Skills } from './container'

const App = () => {
  return (
    <main className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
