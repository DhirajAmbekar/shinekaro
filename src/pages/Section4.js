import React, { useRef } from "react";
import { Container } from "../components/Container";
import Slider from "react-slick";

export const Section4 = () => {
  const slideSection4 = useRef();
  var section4_variance = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    // className: "center",
    centerMode: true,
    centerPadding: "0px",
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          autoplaySpeed: 6000,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: false
        },
      },
    ],
    // cssEase: ""
  };
  const section4 = [
    {
      name: "Secured Education",
      desc: "Ensure your child’s uninterrupted learning journey. 📚✨",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
    {
      name: "Stress Free Environment",
      desc: "Build a financial cushion for their big days of life. 💍🎉",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
    {
      name: "Tax Free Saving & Returns*",
      desc: "Save & get returns smarter while building their future. 💸📈",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
    {
      name: "Wealth Creation",
      desc: "Enjoy higher returns with assured benefits. 🌱💰",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
    {
      name: "Waiver of Premium",
      desc: "With or without your presence your will child fulfils their aspirations💫🎓",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
    {
      name: "Investment Flexibility",
      desc: "Premium paying flexibity while choosing child education plan🎓💰",
      img: "https://shinekaro.in/childeducation/images/pg1.png",
    },
  ];
  return (
    <div className="section4_main">
      <div className="section4_title">Benefits of Child Education Planning</div>
      <Container>
        <div className="section4_list">
          <Slider ref={slideSection4} {...section4_variance}>
            {section4?.map((el, i) => (
              <div key={i} className="ourpurpose_section2_box">
                <div className="ourpurpose_section2_box_inner">
                  <img src={el.img} />
                  <div className="ourpurpose_section2_box_name">{el.name}</div>
                  <div className="ourpurpose_section2_box_desc">{el.desc}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
