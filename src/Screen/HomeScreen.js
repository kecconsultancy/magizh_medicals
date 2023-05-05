import "../style.css"
import React from 'react'
import AboutSection from '../Components/AboutSection'
// import BlogPost from '../Components/BlogPost'
import FeautureSection from '../Components/FeautureSection'
import FooterSection from '../Components/FooterSection'
import HeroSection from '../Components/HeroSection'
// import InstaPost from '../Components/InstaPost'
import MenuSection from '../Components/MenuSection'
import Navbar from '../Components/Navbar'
import ResevationSection from '../Components/ResevationSection'
// import ReviewSection from '../Components/ReviewSection'
import TeamSection from '../Components/TeamSection'



//     < !--Reservation -->

//     < !--Insta Posts-- >

//     < !--Blog Post-- >

//     < !--footer -->
function HomeScreen() {
  return (<>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <MenuSection></MenuSection>
    <FeautureSection></FeautureSection>
    <TeamSection></TeamSection>
    {/* <ReviewSection></ReviewSection> */}
    <ResevationSection></ResevationSection>
    {/* <InstaPost></InstaPost> */}
    {/* <BlogPost></BlogPost> */}
    <FooterSection></FooterSection>

  </>
  )
}

export default HomeScreen