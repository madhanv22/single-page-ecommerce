import React from 'react'
import Header from './components/hero/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/hero/About'
import Team from './components/hero/Team'
import News from './components/hero/News'
import Footer from './components/footer/Footer'
import Service from './components/hero/Service'
import Blog from './components/hero/Blog'
import Sidebar from './components/sidebar/Sidebar'

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