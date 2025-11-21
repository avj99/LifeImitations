import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Contact from '../components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  )
}

export default App
