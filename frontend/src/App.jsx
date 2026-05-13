import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import Feature from './components/feature/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Feature title={"Bags"} name={"American Tours"} price={"$90"}/>
    <Feature title={"Mobile"} name={"Samsung S24"} price={"$900"}/> 
    <Feature title={"Watch"} name={"G-Shock"} price={"$160"}/>
    <Footer/>
    </>
  )
}

export default App
