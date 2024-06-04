import React from 'react'
import { EmblaCarousel } from '../components/EmblaCarousel'
import tech from '../components/techLit'
import backgroundimg from '../assets/eng.jpg'
import backgroundimg1 from '../assets/code.jpg'
import shakinghand from '../assets/solutions.jpg'
import FlexComponent from '../components/FlexComponent'
import FlexReverseComponent from '../components/FlexReverseComponent'
import FlexCardComponent from '../components/FlexCardComponent'
import FlexImageCard from '../components/FlexImageCard'
import CanvasComponent from '../components/CanvasComponent'
import IconComponent from '../components/IconComponent'
import HeadingComponent from '../components/HeadingComponent'
import CentreComponent from '../components/CentreComponent'

function HomePage() {
    const heading1 = "Join hands with Webzotica to unlock new possibilities for your business. Let's navigate the digital landscape together, turning challenges into opportunities."
    const paragraph = "Just like ours, a website marks the beginning of a grand adventure. It’s the gateway to your digital presence, where ideas take shape, connections are made, and possibilities unfold. Embrace this step with excitement, for it leads to a world waiting to be explored."
    const paragraph1 = ' our company has been at the forefront of cutting-edge technology and engineering solutions. From developing robust software applications to designing innovative hardware systems, we have consistently delivered excellence to our clients.'
    const paragraph2 = 'With a journey spanning over a decade, we’ve witnessed the evolution of technology firsthand. From web development to cloud services, cybersecurity to data analytics, we’ve adapted and thrived in this dynamic landscape. Our team of skilled professionals brings passion, creativity, and technical prowess to every project'
    return (
    <div>
      <EmblaCarousel/>
      <CentreComponent heading={"A Website: The First Step on Your Journey"} paragraph={paragraph}/>
      <div className='hero-bg-svg heroS '>
        <FlexReverseComponent heading={"Our Expertise in Engineering and Technology"} paragraph={paragraph1}  bgimg={backgroundimg}/>
      </div>

      <div className='hero-bg-svg heroR '>
        <FlexCardComponent/>
      </div>
      
      <HeadingComponent heading={"Technologies We use"}/>
      <IconComponent tech={tech}/>

      <div className='hero-bg-svg heroR '>
        <FlexComponent heading={heading1}   bgimg={shakinghand}/>
      </div>
      <div className='hero-bg-svg heroS '>
        <FlexImageCard/>
      </div>
      <div className='hero-bg-svg heroR '>
      <FlexComponent heading={"Our Journey"} paragraph={paragraph2}   bgimg={backgroundimg1}/>
      </div>
      <CanvasComponent/>
    </div>
  )
}

export default HomePage
