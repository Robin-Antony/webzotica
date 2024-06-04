import React from 'react'
import CentreComponent from '../components/CentreComponent'
import CanvasComponent from '../components/CanvasComponent'
import FlexImageCard from '../components/FlexImageCard'
import FlexComponent from '../components/FlexComponent'
import CardListComponent from '../components/CardListComponent'
import HeadingComponent from '../components/HeadingComponent'
import backgroundimg1 from '../assets/mvv.png'
import ContactFormComponent from '../components/ContactFormComponent'


function ContactPage() {
    
    const paragraph = "We’d love to hear from you! Whether you have a question, need assistance, or want to discuss your next project, feel free to reach out. Our team is here to help you navigate the digital landscape and turn your ideas into reality. Drop us a line, and let's embark on this journey together!"
    const paragraph2 = 'With a journey spanning over a decade, we’ve witnessed the evolution of technology firsthand. From web development to cloud services, cybersecurity to data analytics, we’ve adapted and thrived in this dynamic landscape. Our team of skilled professionals brings passion, creativity, and technical prowess to every project'
    const content = [{"heading":'Mission', "paragraph":'Our Mission is to achieve what we have already thought about. We, at Techversant, are going to do intensive research in the technologies and finally coming up with more efficient and best solutions for the problems our clients face.'},
    {"heading":'Vision', "paragraph":'People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'},
    {"heading":'Values', "paragraph":'We inculcate the followings values, which prove to be one of the strongest points that mark us unique in the market.'}]
  return (
    <div>
      <CentreComponent heading={"Get in Touch"} paragraph={paragraph}/>
      <div className='hero-bg-svg heroR '>
        <ContactFormComponent/>
      </div>
      <div className='hero-bg-svg heroS '>
        <FlexComponent heading={"Our Journey"} paragraph={paragraph2}   bgimg={backgroundimg1} items={content}/>
      </div>

    </div>
  )
}

export default ContactPage
