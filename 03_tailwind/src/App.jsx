import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className="font-bold bg-black rounded-xl p-5">Tailwind TEst</h1>

      <Card username="Aman Raj" btnText="Linkedin" />

      <Card username="Hitesh Chaudhary" btnText="Twitter" />

      
    </>
  )
}

export default App
