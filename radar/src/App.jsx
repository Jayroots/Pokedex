import { useState } from 'react'
import './App.css'
import Button from "./components/Button"

function App() {
  

  return (
    <div className="App">
      <div>
        <a href="https://www.radars-auto.com/" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx71Q7au61VMe60UyXFgq1bVLnEKMuJEmG9w&usqp=CAU" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Le Radar Ultime</h1>
      <h2>Cliquez ici 🤩 </h2>
      <p>↓</p>
      <div className="button1">
        <Button {handleClick}
      </div>
      
    </div>
  )
}

export default App
