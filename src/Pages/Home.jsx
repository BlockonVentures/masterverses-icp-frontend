import { useState } from 'react'
import Header from '../Components/Common/Header'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Common/Footer'
import PartnerWithUs from '../Components/PartnerWithUs'
import TrendingEvents from '../Components/TrendingEvents'
import MasterverseExperience from '../Components/MasterverseExperience'
import NearByPlaces from '../Components/NearByPlaces'
import Featuredevents from '../Components/Featuredevents'
import EventsWeek from '../Components/EventsWeek'
import OrganizationLogos from '../Components/OrganizationLogos'
import org1 from '../assets/images/org-1.png'
import org2 from '../assets/images/org-2.png'
import org3 from '../assets/images/org-3.png'

function Home() {

  const eventsDataTime = [
    { title: "Today", date: "Wed, 19 Mar" },
    { title: "Tomorrow", date: "Thu, 20 Mar" },
    { title: "Weekend", date: "22 - 23 Mar" },
  ];

  const organizationsData = [
    { name: "Brahma Kumaris", logo: org1 },
    { name: "OSHO", logo: org2},
    { name: "ISKCON", logo: org3 },
    { name: "Brahma Kumaris", logo: org1 },
    { name: "OSHO", logo: org2},
    { name: "ISKCON", logo: org3 },
  ];

  return (
    <>
      <main>
        <HeroSection/>
        <TrendingEvents/>
            {/* <MasterverseExperience/> */}
        <Featuredevents/>
        <NearByPlaces/>
        {/* <EventsWeek events={eventsDataTime} /> */}
        <OrganizationLogos organizations={organizationsData} />
      
      </main>
   
    </>
  )
}

export default Home
