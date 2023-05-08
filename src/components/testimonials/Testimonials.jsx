import React from 'react'
import "./Testimonials.css"
import Avatar from "../../Assets/portfolio1.jpg"
import {Navigation, Pagination, Scrollbar,A11y} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
const data=[
  {
    index:1,
    avatar:Avatar,
    name:'Ekam',
    review: 'my name is ekam behl '

  },
  {
    index:2,
    avatar:Avatar,
    name:'Ekam',
    review: 'my name is ekam behl '
  
  },
  {
    index:3,
    avatar:Avatar,
    name:'Ekam',
    review: 'my name is ekam behl '
  
  },
  {
    index:4,
    avatar:Avatar,
    name:'Ekam',
    review: 'my name is ekam behl '
  
  }
]




const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Navigation,Pagination,Scrollbar,A11y]} 
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      className="container testimonial__container">
      
      {
        data.map(({index,avatar,name,review})=>{
          return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='testimonial__image'>
            <img src= {avatar} alt={name}></img>
            
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>


        )})
      }
      
        
      </Swiper>
    </section>
  )
}

export default Testimonials