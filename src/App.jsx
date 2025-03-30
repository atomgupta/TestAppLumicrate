import { useState } from 'react'
import './App.css'
import logo from "./assets/lc_transparent.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative h-screen w-screen bg-cover bg-center text-[#292828]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute top-1 left-1">
        <img src={logo} alt="Logo" className="auto w-32" />
      </div>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold">Coming Soon</h1>
        <p className="mt-4 text-lg">
          For more information, contact us at : <a className="text-[#004aad] underline" href="mailto:info@lumicratesolutions.com">info@lumicratesolutions.com</a>
        </p>
      </div>
    </div>
  )
}

export default App
