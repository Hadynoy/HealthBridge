import React from 'react'
import Header from '../components/Header'
import SpecialitySection from '../components/SpecialitySection'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
      <Header />
      <SpecialitySection />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home