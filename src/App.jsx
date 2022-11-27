import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Card from './components/Card/Card'
import data from './data.js'

function App() {
  console.log(data)
const cards = data.map(item => {
  return (
    <Card
    key = {item.id}
    item = {item}    
    />
  )
})


 return (
  <div className='main'>
    <Navbar/>
    {/* <HeroSection
    hero_image = {collage_image}
    title = "Be the best version of yourself"
    text = "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
    /> */}
    <section className='cards-section'>
    {cards}
    </section>

  </div>
 )
}

export default App
