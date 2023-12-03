// import React from "react";
// import "./testimonials.css";
// import AVTR1 from "../../assets/avatar/avatar1.jpg";
// import AVTR2 from "../../assets/avatar/avatar2.jpg";

// // import Swiper core and required modules
// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// const data = [
//   {
//     image: AVTR1,
//     name: "Ernest Achiever",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quisquam quam corporis quae eveniet sed accusantium placeat tenetur minus at excepturi ea sequi deserunt.",
//   },
//   {
//     image: AVTR2,
//     name: "John Kirby",
//     review:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quisquam quam corporis quae eveniet sed accusantium placeat tenetur minus at excepturi ea sequi deserunt.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials__container"
//         // install Swiper modules
//         modules={[Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ image, name, review }, index) => {
//           return (
//             <SwiperSlide className="testimonial">
//               <div className="client__avatar">
//                 <img key={index} src={image} alt={name} />
//               </div>
//               <h5 className="client__name">{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
