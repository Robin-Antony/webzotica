import React from 'react'
import ReadMore from './ReadMore'
import solution from "../assets/solu.jpg"
import agile from "../assets/agile.jpg"
import innovation from "../assets/innovation.jpg"
import client from "../assets/client.jpg"
import security from "../assets/security.jpg"
import HeadingComponent from './HeadingComponent'

function FlexImageCard() {
    
  return (
    <div className='hero-bg-svg heroR'>
            <HeadingComponent heading={"Why us?"}/>
    <section className="d-flex flex-wrap justify-content-center align-items-center ">
        <div className="card m-5 d-flex justify-content-center align-item-center fic ">
            <div className="flex-img-w">
                
                <img
                    src={solution}
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-3">
                    <h4 className="card-title">Tailored Solutions</h4>
                    <ReadMore content="We understand that every business is unique. That’s why we craft customized
                     solutions that align with your specific goals and challenges.
                     Whether you're a startup or an enterprise, we’ve got you covered."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src={innovation}
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h4 className="card-title">Innovation Hub</h4>
                    <ReadMore content="Innovation is in our DNA. We explore emerging technologies, experiment with novel approaches, 
                    and stay ahead of industry trends. Our solutions are not just functional; they're future-proof."/>
                    
                    
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src={client}
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h4 className="card-title">Client-Centric Approach</h4>
                    <ReadMore content="Your success is our priority. We collaborate closely with our clients,
                     listening to their needs, understanding their pain points, and delivering solutions that drive real value."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src={agile}
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h4 className="card-title">Agile Development</h4>
                    <ReadMore content="We embrace agility. Our iterative development process ensures rapid delivery
                     without compromising quality. We adapt to changes, iterate, and refine until we achieve perfection."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>
        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src={security}
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h4 className="card-title">Security First</h4>
                    <ReadMore content="In an interconnected world, security is paramount. We embed robust
                     security practices into every solution, safeguarding your data and ensuring compliance."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>
        
    </section>
    </div>
      
  )
}

export default FlexImageCard
