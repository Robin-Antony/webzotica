import React from 'react'
import { EmblaCarousel } from '../components/EmblaCarousel'
import HeroComponent from '../components/HeroComponent'
import tech from '../components/techLit'

import backgroundsvg from '../assets/blob1.svg'
import backgroundsvg1 from '../assets/blob0.svg'
import svgd from '../assets/waved.svg'
import backgroundimg from '../assets/solutions.jpg'
import FlexComponent from '../components/FlexComponent'
import FlexReverseComponent from '../components/FlexReverseComponent'
import HeaderComponent from '../components/HeaderComponent'
import FlexCardComponent from '../components/FlexCardComponent'
import FlexImageCard from '../components/FlexImageCard'
import FooterComponent from '../components/FooterComponent'
import CanvasComponent from '../components/CanvasComponent'
import IconComponent from '../components/IconComponent'

function HomePage() {
    const heading = "Our services"
    const paragraph = ' People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'
  
    return (
    <div>
      <HeaderComponent/>
      <EmblaCarousel/>
      
      <FlexReverseComponent heading={heading} paragraph={paragraph} bgsvg={svgd} bgcontain={backgroundsvg1}  bgimg={backgroundimg}/>
      <FlexComponent heading={heading} paragraph={paragraph} bgcontain={backgroundsvg}  bgimg={backgroundimg}/>
      <FlexCardComponent/>
      {/* <FlexCardComponent/> */}
      <IconComponent tech={tech}/>
      <FlexComponent heading={heading} paragraph={paragraph} bgcontain={backgroundsvg1}  bgimg={backgroundimg}/>
      <FlexImageCard/>
      <CanvasComponent/>
      <FooterComponent/>
    </div>
  )
}

export default HomePage
