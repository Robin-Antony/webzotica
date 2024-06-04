import React from 'react'
import momutty from '../assets/mamoo.jpg'
import mohan from '../assets/mohanlal.jpg'
import salim from '../assets/salimkumar.png'
import ashokan from '../assets/ashokan.jpg'
function CardListComponent() {
  return (
    <section>

        <div className="about-background mb-5 container d-flex m-auto  justify-content-center align-item-center">
            <div className="about-profile-img">
                
                <img className='w-100' src={momutty} alt="" />
               
            </div>

            <div className="about-profile-content">
                <div className="d-flex h-100 w-75 m-auto  justify-content-center align-item-center flex-column">
                    <h2 className="p-2">Robin</h2>
                    <p className="p-2">Meet Robin, our seasoned senior developer.
                     With over 6 years of experience, he bring expertise, creativity, and a passion
                      for elegant code to every project. Whether it's crafting seamless user experiences or solving 
                      complex challenges, he thrive on turning ideas into reality. 
                    </p>
                </div>
            </div>
        </div>

        <div className="about-background mb-5 container d-flex m-auto  justify-content-center align-item-center">
            <div className="about-profile-img">
                
                <img className='w-100' src={mohan} alt="" />
               
            </div>

            <div className="about-profile-content">
                <div className="d-flex h-100 w-75 m-auto  justify-content-center align-item-center flex-column">
                    <h2 className="p-2">Prince </h2>
                    <p className="p-2">Meet Prince, our seasoned UX/UI expert.
                     With a keen eye for aesthetics and user-centric design, he bring creativity,
                      empathy, and pixel-perfect precision to every project. Whether it's crafting intuitive
                       interfaces or enhancing user experiences, Prince
                        is passionate about making digital interactions delightful.
                     Let's collaborate and create designs that resonate!
                    </p>
                </div>
            </div>
        </div>

        <div className="about-background mb-5 container d-flex m-auto  justify-content-center align-item-center">
            <div className="about-profile-img">
                
                <img className='w-100' src={salim} alt="" />
               
            </div>

            <div className="about-profile-content">
                <div className="d-flex h-100 w-75 m-auto  justify-content-center align-item-center flex-column">
                    <h2 className="p-2">Roy Antony </h2>
                    <p className="p-2">
                        Orestes Technologies Pvt. Ltd. successfully Started to service global customers in the field of
                        web design & development, Mobile App development ,Web Application,Software Development,branding.
                        We aim to meet and exceed customer satisfaction in every way possible.
                        We have built a team of exceptionally talented professionals for whom perfection is a habit.
                    </p>
                </div>
            </div>
        </div>

        <div className="about-background mb-5 container d-flex m-auto  justify-content-center align-item-center">
            <div className="about-profile-img">
                
                <img className='w-100' src={ashokan} alt="" />
               
            </div>

            <div className="about-profile-content">
                <div className="d-flex h-100 w-75 m-auto  justify-content-center align-item-center flex-column">
                    <h2 className="p-2">Jeen Joy</h2>
                    <p className="p-2">
                        Orestes Technologies Pvt. Ltd. successfully Started to service global customers in the field of
                        web design & development, Mobile App development ,Web Application,Software Development,branding.
                        We aim to meet and exceed customer satisfaction in every way possible.
                        We have built a team of exceptionally talented professionals for whom perfection is a habit.
                    </p>
                </div>
            </div>
        </div>
  
    </section>
  )
}

export default CardListComponent
