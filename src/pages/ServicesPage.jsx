import React from 'react'
import CentreComponent from '../components/CentreComponent'
import FlexImageCard from '../components/FlexImageCard'
import FlexComponent from '../components/FlexComponent'
import backgroundimg1 from '../assets/mvv.png'
import FlexCardComponent from '../components/FlexCardComponent'
import FlexReverseComponent from '../components/FlexReverseComponent'
function ServicesPage() {
    const paragraph1 = "At our web development company, we're committed to delivering value for your investment. With over 6 years of experience, we offer a range of services tailored to your needs. From website design and development to IT solutions, maintenance, and consultation, we've got you covered. Let's transform your vision into reality!"
    const paragraph2 = 'With a journey spanning over a decade, we’ve witnessed the evolution of technology firsthand. From web development to cloud services, cybersecurity to data analytics, we’ve adapted and thrived in this dynamic landscape. Our team of skilled professionals brings passion, creativity, and technical prowess to every project'
    const content = [{"heading":'Mission', "paragraph":'Our Mission is to achieve what we have already thought about. We, at Techversant, are going to do intensive research in the technologies and finally coming up with more efficient and best solutions for the problems our clients face.'},
    {"heading":'Vision', "paragraph":'People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'},
    {"heading":'Values', "paragraph":'We inculcate the followings values, which prove to be one of the strongest points that mark us unique in the market.'}]
  return (
    <div>
      <CentreComponent heading={"We Build Websites for All Types of Businesses"} paragraph={"Our team specializes in creating customized websites that cater to the unique needs of various businesses, from startups to established enterprises."}/>
      
      <div className='hero-bg-svg heroS '>
        <FlexCardComponent/>
      </div>
      {/* <div className='hero-bg-svg heroS '>
        <FlexReverseComponent heading={"Our Expertise in Engineering and Technology"} paragraph={paragraph1}  bgimg={backgroundimg1}/>
      </div> */}
      <div className='hero-bg-svg heroR '>
        <FlexComponent heading={"Our Journey"} paragraph={paragraph2}   bgimg={backgroundimg1} items={content}/>
      </div>
      <div className='hero-bg-svg heroS '>
        <FlexImageCard/>
      </div>
    </div>
  )
}

export default ServicesPage
