import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "../../../styles/Clients.module.css";
// import styles from '../../../styles/Client.module.css'

export default function Clients() {
  return (
    <>
    
<section className="bg-light">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 ">
        {/* <h5 className="text-uppercase mt-0">What our clients have to say about us</h5> */}
      </div>
    </div>
    <div className="row mt-5 ">
      <div className="col-md-4 col-sm-6 ">
        <div className="card border-0">
          <div className="card-body text-center">
            <img
              className="rounded-circle mb-4"
              src="https://www.digiprima.com/images/chales(4).webp"
              alt="outsource node js development company"
              width={200}
              height={200}
            />
            <h5 className="card-title mb-0">CHARLES BLUNDEL</h5>
            <small className="text-muted">Scientist</small>
            <p className="card-text mt-4">
              DigiPrima worked very hard on our project at short notice. Node.js and Mongo experts!!! Their help in our Mean stack development project which was much appreciated! Great team to work with.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

      <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

