import React from 'react'
import './testimonials.css'
import ava1 from "../../assets/avatar1.jpg"
import ava2 from "../../assets/avatar2.jpg"
import ava3 from "../../assets/avatar3.jpg"
import ava4 from "../../assets/avatar4.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data =[
  {
    avatar: ava1,
    name: 'fake',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque et voluptates consequatur explicabo, omnis, perferendis dignissimos unde vero eius corrupti obcaecati doloremque nisi ratione similique vel! Corporis voluptates ab nostrum!'
  },
   {
    avatar: ava2,
    name: 'fake2',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque et voluptates consequatur explicabo, omnis, perferendis dignissimos unde vero eius corrupti obcaecati doloremque nisi ratione similique vel! Corporis voluptates ab nostrum!'
  },
  {
    avatar: ava3,
    name: 'fak3',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque et voluptates consequatur explicabo, omnis, perferendis dignissimos unde vero eius corrupti obcaecati doloremque nisi ratione similique vel! Corporis voluptates ab nostrum!'
  },
  {
    avatar: ava4,
    name: 'fake4',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque et voluptates consequatur explicabo, omnis, perferendis dignissimos unde vero eius corrupti obcaecati doloremque nisi ratione similique vel! Corporis voluptates ab nostrum!'
  },
]


function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}


      >




        
          {
            data.map(({avatar, name, review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="client pic" />
                  
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
              )
            })
          }

         
        
       
        
      </Swiper>
    </section>
  )
}

export default Testimonials
