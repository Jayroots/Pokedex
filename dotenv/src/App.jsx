import React from 'react'
import './App.css'
require('dotenv').config()


function App() {


  return (
    console.log(`I am  ${process.env.MY_NAME},wilder in ${process.env.MY_CITY}and I love ${process.env.MY_LANGUAGE}.`)

  )
}

export default App
