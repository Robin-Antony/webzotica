import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import backgroundimg1 from '../assets/handshake-t.png'
import backgroundimg2 from '../assets/design-t.png'
import backgroundimg3 from '../assets/lowcost.png'
import HeroComponent from './HeroComponent' 


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const heading = "Our services"
  const paragraph = ' People at Webzotica are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'
  const paragraph2 = "Tools, Designs and innovative expersts, all in one place! The most intuitive way to imagine your next user experiance"
  const paragraph1 = " We craft value-packed solutions. Our goal is to provide you with a digital presence that not only fits your budget but also delivers exceptional results."
  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()) // Access API
  //   }
  // }, [emblaApi])

  return (
    <section className="embla bg1-svg hero-bg-svg" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide">
          <HeroComponent heading={"The Design Thinking Super Powers"} paragraph={paragraph2}  bgimg={backgroundimg2}/>
        </div>
        <div className="embla__slide">
          <HeroComponent heading={"Easily Build Your Next Website With Us"} paragraph={paragraph}  bgimg={backgroundimg1}/>
        </div>
        <div className="embla__slide">
          <HeroComponent heading={"Affordable Web Solutions Beyond Expectations"} paragraph={paragraph1}  bgimg={backgroundimg3}/>
        </div>
      </div>
    </section>
  )
}
