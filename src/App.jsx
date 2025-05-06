import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import GettingStarted from './components/GettingStarted.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Body/>
    <GettingStarted/>
    </>
  )
}

export default App
