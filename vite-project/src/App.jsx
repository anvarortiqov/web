import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import Active from './components/Active'
import Games from './components/Games'
import Promo from './components/Promo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Product/>
      <Active/>
      <Games/>
      <Promo/>
    </>
  )
}

export default App
