import React from 'react'
import ReadMore from './ReadMore'

function FlexImageCard() {
    
  return (
    <div className='hero-bg-svg heroR'>
    <section className="d-flex flex-wrap justify-content-center align-items-center ">
        <div className="card m-5 d-flex justify-content-center align-item-center fic ">
            <div className="flex-img-w">
                
                <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-3">
                    <h5 className="card-title">Card title</h5>
                    <ReadMore content="This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h5 className="card-title">Card title</h5>
                    <ReadMore content="This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer."/>
                    
                    
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h5 className="card-title">Card title</h5>
                    <ReadMore content="This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer."/>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
            
        </div>

        <div className="card m-5 d-flex justify-content-center align-item-center fic">
            <div className="flex-img-w">
                
                <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    className=" rounded-start"
                />
            </div>
            <div className="flex-content-w">
                <div className=" p-4">
                    <h5 className="card-title">Card title</h5>
                    <ReadMore content="This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer."/>
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
