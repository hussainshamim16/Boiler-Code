import Approutes from './routes/Approutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [name, setname] = useState("Beneficiary Management")
  return (
    <>
      <Navbar name={name} />
      <Approutes />
      {/* <Footer /> */}
    </>
  )
}

export default App