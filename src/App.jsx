
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
   
    <Header/>
      <Routes>
        <Route element={<Landing/>} path='/' />
        <Route element={<Home/>} path='/home' />
        <Route element={<History/>} path='/history' />

        
      </Routes>
      <Footer/>



    </>
  )
}

export default App
