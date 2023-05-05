import "../style.css"
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import AboutSection from '../Components/AboutSection'
import BlogPost from '../Components/BlogPost'
import FeautureSection from '../Components/FeautureSection'
import FooterSection from '../Components/FooterSection'
import HeroSection from '../Components/HeroSection'
import InstaPost from '../Components/InstaPost'
import MenuSection from '../Components/MenuSection'
import Navbar from '../Components/Navbar'
import ResevationSection from '../Components/ResevationSection'
import ReviewSection from '../Components/ReviewSection'
import TeamSection from '../Components/TeamSection'

import "../assets/css/search.css"
import ProductSection from "../Components/ProductSection"
import ViewProduct from "../Components/ViewProduct";
function ProductScreen() {
  return (<>
    <Navbar></Navbar>
    <Outlet></Outlet>
    {/* <HeroSection></HeroSection>
    <AboutSection></AboutSection> */}

    {/* <FeautureSection></FeautureSection> */}
    {/* <TeamSection></TeamSection> */}
    {/* <ReviewSection></ReviewSection> */}
    {/* <ResevationSection></ResevationSection> */}
    {/* <InstaPost></InstaPost> */}
    {/* <BlogPost></BlogPost> */}
    <FooterSection></FooterSection>
  </>
  )
}

export default ProductScreen