import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbaruse from './Navbaruse'
import Card from './Card'
function App() {

  return (
       <div className='bg-slate-200 h-screen w-full' >
         <Navbaruse/>
         <Card></Card>  
       </div>
    )
}

export default App
