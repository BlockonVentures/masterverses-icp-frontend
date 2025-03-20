import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import Header from './Components/Common/Header';
import PartnerWithUs from './Components/PartnerWithUs';
import Footer from './Components/Common/Footer';
function App() {
  return (
      <>       
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
              </Routes>
            <PartnerWithUs/>
            <Footer/>
        </BrowserRouter>   
    </>
  )
}

export default App
