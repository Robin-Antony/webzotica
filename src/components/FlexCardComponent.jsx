
import imag from '../assets/animImg1.png'
import imag1 from '../assets/mob-d.png'
import imag2 from '../assets/cms-t.png'
import imag3 from '../assets/sb-t.png'
import imag4 from '../assets/seo-t.png'
import imag5 from '../assets/uiux-t.png'
import ReadMore from './ReadMore'
import HeadingComponent from './HeadingComponent'
function FlexCardComponent() {
    const uxui = "We offer UX/UI design services to ensure your digital products are visually appealing, user-friendly, and optimized for conversions. Our designers collaborate closely with you to create intuitive interfaces and engaging user experiences. Let's transform your ideas into exceptional digital solutions! "
    const ecom = "Our e-commerce expertise extends to platforms like Magento, Shopify, BigCommerce, and WooCommerce. We create secure, scalable, and feature-rich e-commerce websites that drive sales and provide a seamless shopping experience for your customers."
    const cms = "A robust CMS is essential for managing your website content efficiently. We build custom CMS solutions that allow you to update, organize, and publish content seamlessly. Whether it's a blog, news portal, or e-commerce site, our CMS development ensures a user-friendly experience."
    const seo = "Boost your online visibility with our SEO services. We optimize your website to rank higher on search engines, driving organic traffic and increasing conversions. Our strategies include keyword research, content optimization, and technical SEO best practices."
    const mobDev ="We specialize in creating mobile apps that enhance user experiences. From intuitive interfaces to seamless performance, our mobile app development services cater to both Android and iOS platforms. Let us bring your app idea to life."
    const webDev = "Our team crafts custom web platforms tailored to your unique needs. Whether it’s building a corporate website, an e-commerce platform, or a web application, we've got you covered. Our expertise spans various industries, including finance, transportation, and construction1."
  return (
    <section className='flex-card-container hero-bg-svg'>
            <HeadingComponent heading={"Our Services"}/>
    <div className='container d-flex justify-content-around flex-wrap w-100 '>
        
        
        <div className="card m-3" id="card"  >
            <div className="card-body">
                <h5 className="card-title"><img src={imag5} style={{width:'80px'}} alt="" />UI/UX Designing</h5>
                
                <ReadMore content={uxui}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />E-commerce Solutions</h5>
                <ReadMore content={ecom}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag3} style={{width:'80px'}} alt="" />Web Development</h5>
                <ReadMore content={webDev}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag2} style={{width:'80px'}} alt="" />Content Management System</h5>
                <ReadMore content={cms}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag1} style={{width:'80px'}} alt="" />Mobile Applications</h5>
                <ReadMore content={mobDev}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title"><img src={imag4} style={{width:'80px'}} alt="" />SEO</h5>
                <ReadMore content={seo}/>
                {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button> */}
            </div>
        </div>
       
      
    </div>
    </section>
  )
}

export default FlexCardComponent
