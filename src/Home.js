import React from 'react'
import HeroSection from './Components/HeroSection'
import Courses from './Components/Courses/Courses'
import KeyPoints from './Components/keypoints/KeyPoints'
import WorldClass from './Components/worldclass/WorldClass'
import Batches from './Components/Batches/Batches'
import SmartStop from './Components/smartstop/SmartStop'
import SelfPaced from './Components/selfpaced/SelfPaced'
import Collab from './Components/Collab'

const Home = () => {


  return (
    <>
    <HeroSection/>
    <Courses/>
    <KeyPoints/>
    <WorldClass/>
    <Batches/>
    <SmartStop/>
    <SelfPaced/>
    <Collab/>
    </>
  )
}

export default Home