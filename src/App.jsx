import React from 'react'
import Header from './components/home/Header'
import Navbar from './components/home/Navbar'
import About from './components/home/About'
import Team from './components/home/Team'
import News from './components/home/News'
import Footer from './components/home/Footer'
import Service from './components/home/Service'
import Blog from './components/home/Blog'
import Sidebar from './components/home/Sidebar'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Sidebar />
      <About />
      <Service />
      <Team />
      <Blog />
      <News />
      <Footer />
    </div>
  )
}

export default App