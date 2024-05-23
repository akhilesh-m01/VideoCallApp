import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Store from './components/Store'
import ExtraBanner from './components/ExtraBanner'
import About from './components/About'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Store/>
      <ExtraBanner/>
      <About/>
      <Footer/>
      <ChatButton/>
    </>
  )
}

export default App
