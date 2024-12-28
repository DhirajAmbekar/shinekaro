import React, { useRef, useState } from "react";
import { Container } from "../components/Container";
import Slider from "react-slick";
import Imgpg1 from "../assets/pg1.png";
import Imgpg2 from "../assets/pg2.png";
import Imgpg3 from "../assets/pg3.png";
import Imgpg4 from "../assets/pg4.png";
import Imgpg5 from "../assets/pg5.png";
import Imgpg6 from "../assets/pg6.png";
import Graph from "../assets/graph.png";
import Marriage from "../assets/wed.jpg";
import Gurantee from "../assets/guaranteed-returns_31CDwt7c.png";

export const Section4 = () => {
  const slideSection4 = useRef();
  const slideTO = useRef();
  const [state, setState] = useState(0);
  var section4_variance = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
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

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    arrows: false,
    // cssEase: ""
    afterChange: (a) => setState(a),
  };
  const section4 = [
    {
      name: "Secured Education",
      desc: "Ensure your child’s uninterrupted learning journey. 📚✨",
      img: Imgpg1,
    },
    {
      name: "Stress Free Environment",
      desc: "Build a financial cushion for their big days of life. 💍🎉",
      img: Imgpg2,
    },
    {
      name: "Tax Free Saving & Returns*",
      desc: "Save & get returns smarter while building their future. 💸📈",
      img: Imgpg3,
    },
    {
      name: "Wealth Creation",
      desc: "Enjoy higher returns with assured benefits. 🌱💰",
      img: Imgpg4,
    },
    {
      name: "Waiver of Premium",
      desc: "With or without your presence your will child fulfils their aspirations💫🎓",
      img: Imgpg5,
    },
    {
      name: "Investment Flexibility",
      desc: "Premium paying flexibity while choosing child education plan🎓💰",
      img: Imgpg6,
    },
  ];

  const plans = [
    {
      name: "Are You Prepared?",
      sub: "For These Realities?",
      desc: "“College fees for engineering today: ₹10 Lakhs – What about 15 years from now?”",
      list: [
        "Factors such as inflation must also be considered",
        "Living & better education cost is increasing regularly",
      ],
      img: Graph,
    },
    {
      name: "Are You Prepared?",
      sub: "For These Realities?",
      desc: "“College fees for engineering today: ₹10 Lakhs – What about 15 years from now?”“A simple wedding costs ₹25 Lakhs today. What’s your plan for the future?”",
      list: [
        "Inflation, destination wedding rents increasing",
        "Jewelry, Apparels, Photography, Gifting etc",
      ],
      img: Marriage,
    },
    {
      name: "Are You Prepared?",
      sub: "For These Realities?",
      desc: "The guaranteed plan will make it possible on time & assured money for your child's future expenses like their education, marriage, and many other events.",
      list: [],
      img: Gurantee,
      btn: {
        name: "Book Appointment",
        click: () => {},
      },
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
                  <img src={el.img} alt="imgfailed" />
                  <div className="ourpurpose_section2_box_name">{el.name}</div>
                  <div className="ourpurpose_section2_box_name">{el.sub}</div>
                  <div className="ourpurpose_section2_box_desc">{el.desc}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="section4_boxes_title">
          Are You Prepared? <br></br>
          <span>For These Realities?</span>
        </div>
        <div className="section4_boxes">
          <Slider ref={slideTO} {...settings}>
            {plans?.map((el, i) => (
              <div key={i} className="section4_box">
                <div className="make_gap_secttion4">
                  <div className="secton4_left">
                    <div className="section4_left_desc">{el.desc}</div>
                    <div className="section4_left_list">
                      {el.list.map((el1, i1) => (
                        <div key={i1}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xlink="http://www.w3.org/1999/xlink"
                            width="12"
                            height="12"
                            x="0"
                            y="0"
                            viewBox="0 0 520 520"
                            space="preserve"
                            class="hovered-paths"
                          >
                            <g>
                              <path
                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                data-name="7-Check"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                                class="hovered-path"
                              ></path>
                            </g>
                          </svg>
                          {el1}
                        </div>
                      ))}
                    </div>
                    {el.list.length ? (
                      ""
                    ) : (
                      <div className="btns">{el?.btn?.name}</div>
                    )}
                  </div>
                  <div className="section4_box_img">
                    <div
                      className="cust-video-iframe"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        src={el.img}
                      />
                    </div>
                  </div>
                  <div className="secton4_left_mobile">
                    <div className="section4_left_desc_mob">{el.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
