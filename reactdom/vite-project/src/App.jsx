import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function App() {

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
