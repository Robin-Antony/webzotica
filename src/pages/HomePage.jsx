import React from 'react'
import { EmblaCarousel } from '../components/EmblaCarousel'
import HeroComponent from '../components/HeroComponent'
import tech from '../components/techLit'

import backgroundsvg from '../assets/blob1.svg'
import backgroundsvg1 from '../assets/blob0.svg'
import svgd from '../assets/waved.svg'
import backgroundimg from '../assets/eng.jpg'
import backgroundimg1 from '../assets/code.jpg'
import shakinghand from '../assets/solutions.jpg'
import FlexComponent from '../components/FlexComponent'
import FlexReverseComponent from '../components/FlexReverseComponent'
import HeaderComponent from '../components/HeaderComponent'
import FlexCardComponent from '../components/FlexCardComponent'
import FlexImageCard from '../components/FlexImageCard'
import FooterComponent from '../components/FooterComponent'
import CanvasComponent from '../components/CanvasComponent'
import IconComponent from '../components/IconComponent'
import HeadingComponent from '../components/HeadingComponent'
import CentreComponent from '../components/CentreComponent'

function HomePage() {
    const heading1 = "Join hands with Webzotica to unlock new possibilities for your business. Let's navigate the digital landscape together, turning challenges into opportunities."
    const paragraph1 = ' our company has been at the forefront of cutting-edge technology and engineering solutions. From developing robust software applications to designing innovative hardware systems, we have consistently delivered excellence to our clients.'
    const paragraph2 = 'With a journey spanning over a decade, we’ve witnessed the evolution of technology firsthand. From web development to cloud services, cybersecurity to data analytics, we’ve adapted and thrived in this dynamic landscape. Our team of skilled professionals brings passion, creativity, and technical prowess to every project'
    return (
    <div>
      <EmblaCarousel/>
      <CentreComponent/>
      <FlexReverseComponent heading={"Our Expertise in Engineering and Technology"} paragraph={paragraph1} bgsvg={svgd}  bgimg={backgroundimg}/>
      <FlexComponent heading={"Our Journey"} paragraph={paragraph2}   bgimg={backgroundimg1}/>
      <FlexCardComponent/>
      <HeadingComponent heading={"Technologies We use"}/>
      <IconComponent tech={tech}/>
      <FlexComponent heading={heading1}   bgimg={shakinghand}/>
      <FlexImageCard/>
      <CanvasComponent/>
    </div>
  )
}

export default HomePage
