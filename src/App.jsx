import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-dark'>
     <Navbar/>
     <Intro/>
     <About/>
     <Services/>
     <Gallery/>
     <Client/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
