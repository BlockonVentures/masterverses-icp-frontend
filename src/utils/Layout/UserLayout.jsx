import React from 'react'
import Header from '../../Components/Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Common/Footer'
import PartnerWithUs from '../../Components/PartnerWithUs'

const UserLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <PartnerWithUs/>
        <Footer/>
    </>
  )
}

export default UserLayout