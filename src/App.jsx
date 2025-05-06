import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import GettingStarted from './components/GettingStarted.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/GettingStarted" element={<GettingStarted />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App