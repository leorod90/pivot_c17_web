import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import Bio from "./components/Bio"

function App(props) {
  const name = "Pretty Pink"
  const description = "Hello I'm learning to code"

  return (
    <>
      <Header

      />
      <Card
        nameProps={name}
        descriptionProps={description}
      />
      <Bio />
    </>

  )
}

export default App;


