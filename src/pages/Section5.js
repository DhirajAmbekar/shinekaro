import React from "react";
import { Container } from "../components/Container";
import Slider from "react-slick";
import Client1 from "../assets/t1.jpg";
import Client2 from "../assets/t2.jpg";
import Client3 from "../assets/t3.jpg";
import Client4 from "../assets/t4.jpg";

export const Section5 = () => {
  var Section5 = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const clients = [
    {
      name: "Priya",
      role: "Software Engineer",
      desc: "“With this plan, I’m confident about my daughter’s dream to study abroad.”",
      img: Client1,
    },
    {
      name: "Rakesh",
      role: "Banker",
      desc: "“I no longer worry about my son’s future expenses, even if anything happens to me.”",
      img: Client2,
    },
    {
      name: "Sneha",
      role: "Teacher",
      desc: "“I used to stress about rising education costs. Now, I feel prepared for my twins’ future!”",
      img: Client3,
    },
    {
      name: "Anil",
      role: "IT Professional",
      desc: "”This plan has given me peace of mind and a solid foundation for my child’s career goals.”",
      img: Client4,
    },
  ];
  return (
    <div className="section5_main">
      <div className="section5_title">"Real Stories, Real Solutions"</div>
      <Container>
        <Slider {...Section5}>
          {clients?.map((el, i) => (
            <div key={i}>
              <div className="section5_box_main">
                <div className="section5_top">
                  <img height={42} width={42} src={el.img} alt="imgfailed" />
                  <div>
                    <div className="section5_name">{el.name}</div>
                    <div className="section5_prof">{el.role}</div>
                  </div>
                </div>
                <div className="section5_center">{el.desc}</div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};
