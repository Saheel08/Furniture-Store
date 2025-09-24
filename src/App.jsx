import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Footer />
    </div>
  )
}

export default App
