import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import collage_image from '../public/assets/Group 77.png'
import Card from './components/Card/Card'

function App() {
 return (
  <div className='main'>
    <Navbar/>
    {/* <HeroSection
    hero_image = {collage_image}
    title = "Be the best version of yourself"
    text = "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
    /> */}
    <Card
    img = "CardImg.png"
    reviews_count = '5'
    country = 'USA'
    description = 'Life lessons with Katie Zaferes'
    card_price = 'From $135'
    />
  </div>
 )
}

export default App
