import React from 'react'
import html from "../assets/img/logo_html"
import css from "../assets/img/logo_css"
import brush from "../assets/img/logo_brush"


const Home = () => {
  return (
    <div>
  <main className="main">
           <h2>Professional Web Design</h2>
           <p>Lorem dipisicing elit. Ut sed est molestiae totam illum laudantium, voluptatum esse provident laborum alias!</p>

       </main>
       <div className="mail">
        <p>Subscribe To Our Newsletter</p>
        <div className="input">
            <input type="email" name="" placeholder="Enter Email" id="email"/>
            <button>Subscribe</button>
        </div>
    </div>
    <div className="bottom">
        <div className="left">
            <img src={html} alt=""/>
           <h2>HTML5 Markup</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae.</p>
        </div>
        <div className="left">
            <img src={css} alt=""/>
            <h2>CSS3 Styling</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae.</p>
        </div>
        <div className="left">
            <img src={brush} alt=""/>
            <h2>Graphic Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae.</p>
        </div>

</div>
    </div>
  )
}

export default Home