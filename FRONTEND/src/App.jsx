import Approutes from './routes/Approutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState("hussain Shamim")
  return (
    <>
      <Navbar name={name} />
      <Approutes />
      <Footer />
    </>
  )
}

export default App