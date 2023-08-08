import Navbar from "./components/Navbar"
import '../src/styles/styles.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Models from "./Pages/Models"
import Contact from "./Pages/Contact"
import TestimonialsPage from "./Pages/TestimonialsPage"

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="about" element={<About />} />
      <Route index path="models" element={<Models />} />
      <Route index path="testimonials" element={<TestimonialsPage />} />
      <Route index path="contact" element={<Contact />} />
      
      </Routes>
    </>
  )
}

export default App
