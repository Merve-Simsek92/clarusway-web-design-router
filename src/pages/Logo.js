import React from 'react'
import { useLocation } from "react-router-dom";
import brush from "../assets/img/logo_brush.png"

const Logo = () => {
    const location = useLocation();  
  return (
    <div>
        <img src={brush} alt="" style={{width:"200px",margin:"20px"}}/>
    <h3>Graphic Design</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium accusantium enim illo libero ad repellat qui saepe quas autem sequi necessitatibus harum, laudantium incidunt eum quae sed nostrum consectetur maxime iure quisquam fuga error, nam aut. Accusamus autem fuga iste quia ad tenetur, eos a. Facere at culpa nemo odit minima quasi, suscipit assumenda alias</p><p> nesciunt iusto rerum. Dolor tempora voluptas harum, id, voluptates debitis eaque iusto laudantium voluptatem quam libero illum temporibus? A, minus voluptate. Eligendi, sapiente architecto?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed itaque magnam vitae enim non! Numquam, sapiente. Doloribus quia reprehenderit, dolorem ipsum numquam provident voluptate cupiditate, ullam molestias, sapiente pariatur ea? Aliquam quibusdam nulla placeat ex dignissimos saepe ad veritatis velit harum repudiandae iste repellat alias quam amet omnis nisi, facilis voluptate, laudantium accusantium itaque sequi sunt pariatur quae! Facere voluptates maiores temporibus sed veritatis repellendus, dicta ut neque dolorem quam alias! Ratione eius mollitia rem autem beatae minima quisquam fuga, ex repudiandae tempore, soluta officiis deserunt a iusto pariatur distinctio. Facere atque quaerat quibusdam culpa alias aut iure fugiat molestias quia accusantium ratione assumenda error delectus ex minus, est perspiciatis inventore? Ipsa ducimus libero aperiam animi vitae, consectetur itaque?</p>
    </div>
  )
}

export default Logo