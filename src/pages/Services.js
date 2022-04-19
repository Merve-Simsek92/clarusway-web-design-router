import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <div>
 <div className="middle">
        <p>Subscribe To Our Newsletter</p>
        <div className="input">
            <input type="email" name="" id="mail" placeholder="Enter Email"/>
            <button className='button'>Subscribe</button>
        </div>
        </div>
        <div className='alt'>
            
        <div className="bottom-end">
            <h2>Services</h2>
            <div className="p1-end">
                <h2>Website Design</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis!</p>
                
                <p>   Pricing : $1,000-3,000</p></div>
               
                                <div className="p1-end">
                     <h2>Website Maintenance</h2>
                     <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debi
                                  </p>     
                      <p>  Pricing : $250 per month</p>
                 </div>
                 <div className="p1-end">
                <h2>Website Hosting</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis!
                    </p>
                   <p> Pricing : $25 per month</p>
                 </div>
        </div>
        <div> <div className="mail-end">
            <h3>Get A Quote</h3>
            <form action="get">
              <div> <label for="">Name</label></div> 
              <div><input type="text" placeholder="Name"/></div>  
                <div><label for="">Email</label></div>
                <div><input type="email" placeholder="Email Address"/></div>
               <div><label for="">Message</label></div> 
                <div><textarea name="" id="" cols="20" rows="3"placeholder="Message"></textarea></div>
                <button>Send</button>
            </form>
        </div></div>
       
    </div>

    </div>
  )
}

export default Services
