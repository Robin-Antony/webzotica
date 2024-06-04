import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {

    const [toggler, setToggler] = useState(window.innerWidth > 1000)
 


    function togglerHandler(){
        if(toggler){

            setToggler(false)
            console.log(toggler)

        }else{
            setToggler(true)
            console.log(toggler)
        }

    }
  return (
    <section>
            
        <nav className="navbar navbar-expand-lg d-flex justify-content-spacearound p-3">
            <div className=' flex-fill d-flex'>
                { !toggler ?(<button className="navbar-toggler" type="button">
                    <i className="fas fa-bars" onClick={togglerHandler}></i>
                </button>):<p></p>}

                <a className=" bg-light ms-5" href="#">
                     <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                    /> 
                </a>

            </div>

            <div className=" navbar-container  ">
                <div className="d-flex align-items-center w-100">
                    {toggler?(<>
                        
                    <ul className="navbar-nav me-auto  mb-lg-0 ">
                        <li className=' ' >
                            <button className="navbar-toggler text-white " style={{'marginLeft':'90%'}} type="button">
                            <i className="fas " onClick={togglerHandler}>x</i>
                        </button>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link  " href={'/'}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link  " href={'/webzotica/#about'}>About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link  " href={'/webzotica/#services'}>Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link  " href={'/webzotica/#contact'}>Contact Us</a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link  " href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="#">Products</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link  " href="#">Careers</a>
                        </li> */}
                    </ul>
                    </>
                    ):(<h1></h1>)}
                </div>    
            </div>
            

            
        </nav>
        
    </section>
  )
}

export default HeaderComponent
