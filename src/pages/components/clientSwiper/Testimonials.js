import { Swiper, SwiperSlide } from "swiper/react";
// import styles from '.././../../styles/Testimonials.module.css';
import TestimonialItem from "./TestimonialItem";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper.min.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "ZACH BOISJOLY",
      position: "CEO",
      image: "https://www.digiprima.com/images/chales(4).webp",
      content:
        "Working with DigiPrima has been highly rewarding and stimulating. DigiPrima team built a secure, all-in-one online Equipment Finance platform for me. I really appreciate your help and enjoyed working with you. Wish you all the best.",
    },
    {
      name: "ROBIN OWENS-WRIGHT",
      position: "Founder/Managing Principal",
      image: "https://www.digiprima.com/images/chales(3).webp",
      content:
        "AMAZING work! DigiPrima knows how to troubleshoot and is quick and reliable. I HIGHLY recommend DigiPrima they back up their work and they will now be my “go to” person. Very professional and creative.",
    },
    {
      name: "CHARLES BLUNDEL",
      position: "Scientist",
      image: "https://www.digiprima.com/images/chales(1).webp",
      content:
      "DigiPrima worked very hard on our project at short notice. Node.js and Mongo experts!!! Their help in our Mean stack development project which was much appreciated! Great team to work with.",
    },
    {
      name: "WILLIAM STANTON",
      position: "Director of Business Development",
      image: "https://www.digiprima.com/images/chales(4).webp",
      content:
        "DigiPrima Technologies is a highly skilled team  with an eye for details. The project management and communication really good and the dedicated project manager made a great job keeping things together.",
    },
    {
      name: "CHARLIE DEL",
      position: "Engineer",
      image: "https://www.digiprima.com/images/chales(4).webp",
      content:
        "DigiPrima worked very hard on our project at short notice. Node.js and Mongo experts!!! Their help in our Mean stack development project which was much appreciated! Great team to work with.",
    },
    // Add more testimonials here...
  ];
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={3}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
     
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div>
           
            <div className="row">
              <TestimonialItem
                name={testimonial.name}
                position={testimonial.position}
                image={testimonial.image}
                content={testimonial.content}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
