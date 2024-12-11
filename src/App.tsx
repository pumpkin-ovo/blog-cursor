import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Photography from './pages/Photography'
import TechNotes from './pages/TechNotes'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/tech-notes" element={<TechNotes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App 