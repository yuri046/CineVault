import Header from './components/header'
import Footer from './components/footer'
import './App.css'

import { Outlet } from 'react-router-dom'

function App() {


  return (
   <div className='App'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
   </div>
  )
}

export default App
