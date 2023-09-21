import React from 'react'
import "./Portfolio.css"
import img1 from "../../Assets/portfolio1.jpg"
import img2 from "../../Assets/api.jpg"
import img4 from "../../Assets/ecom.png"
import img3 from "../../Assets/admin.png"

const data=[
  {
  id:1,
  image:img4,
  title:'E-Commerce-Website',
  Description:"Typescript | Next.JS | Stripe | Prismadb",
  github:'https://github.com/EkamBehl/ecommerce-store-1',
  demo:'https://ecommerce-store-1-ashen.vercel.app/'
  },
  {
    id:2,
    image:img3,
    title:'E-Commerce-Admin',
    github:'https://github.com',
    Description:"Typescript | Next.JS | Stripe | Prismadb | Cloudinary ",
    demo:'https://ecommerce-admin-xi-ruby.vercel.app/'
  },
  
  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
     
    <div className="container portfolio__container">
         
      {data.map(({id,image,title,Description,github,demo})=>{
        return(
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h2> {title}</h2>
            <h3> {Description} </h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'> Github</a>
              <a href={demo} className='btn-primary btn' target='_blank'>Live Demo</a>

            </div>

          </article>
      


        )
        

      })}
      
     </div>
    </section>
  )
}

export default Portfolio
