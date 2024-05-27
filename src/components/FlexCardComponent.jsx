
import imag from '../assets/animImg1.png'
import ReadMore from './ReadMore'

function FlexCardComponent() {


    const content1 = "Some quick example text to build on the card title and make up the bulk of the card's content. on the card title and make up the bulk of the card's content."
  return (
    <section className='flex-card-container hero-bg-svg'>
    <div className='container d-flex justify-content-around flex-wrap w-100 '>
        
        
        <div className="card m-3" id="card"  >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />UI/UX Designing</h5>
                
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />E-commerce Solutions</h5>
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Web Development</h5>
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Content Management System</h5>
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Mobile Applications</h5>
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Digital Marketing</h5>
                <ReadMore content={content1}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
       
      
    </div>
    </section>
  )
}

export default FlexCardComponent
