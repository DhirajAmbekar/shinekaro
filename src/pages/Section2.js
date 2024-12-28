import React, { useRef } from "react";
import Slider from "react-slick";
import { Container } from "../components/Container";

export const Section2 = () => {
  const slideSection = useRef();
  var section2_variance = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
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
  const future = [
    {
      name: "Rising Cost",
      desc: "The cost of higher education and marriage doubles every 10 years.",
      img: "https://shinekaro.in/childeducation/images/1322818-a8aa10cd.png",
    },
    {
      name: "Competitive World",
      desc: "Provide your child the best opportunities to excel.",
      img: "https://shinekaro.in/childeducation/images/1322818-a8aa10cd.png",
    },
    {
      name: "Peace of Mind",
      desc: "Stay ahead of future uncertainties with a secured fund.",
      img: "https://shinekaro.in/childeducation/images/1322818-a8aa10cd.png",
    },
    {
      name: "Dream Big",
      desc: "Support your child’s aspirations without financial constraints.",
      img: "https://shinekaro.in/childeducation/images/1322818-a8aa10cd.png",
    },
    {
      name: "Better Education",
      desc: "Your proper guidance today, their success tomorrow.",
      img: "https://shinekaro.in/childeducation/images/1322818-a8aa10cd.png",
    },
  ];
  return (
    <div className="section2_main">
      <Container>
        <div className="section2_title">
          Why do Planning Today for Your Child's Future?
        </div>
        <div className="section2_list_future">
          <div
            onClick={() => {
              slideSection.current.slickPrev();
              // console.log(slideSection4);
            }}
            className="menu_arrow_section2_left"
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2499 24.9999L14.3999 22.8499L4.4999 12.9499L14.3999 3.0499L12.2499 0.899902L0.199903 12.9499L12.2499 24.9999Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="section2_list_future_boxes">
            <Slider ref={slideSection} {...section2_variance}>
              {future?.map((el, i) => (
                <div key={i} className="section2_box">
                  <div className="section2_box_inner">
                    <img src={el.img} />
                    <div className="section2_box_title">{el.name}</div>
                    <div className="section2_box_desc">{el.desc}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div
            onClick={() => {
              slideSection.current.slickNext();
            }}
            className="menu_arrow_section2_right"
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.74961 24.9999L0.599609 22.8499L10.4996 12.9499L0.599609 3.0499L2.74961 0.899902L14.7996 12.9499L2.74961 24.9999Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="section2_plan_box">
          <div className="section2_plan_title">Child Education Plan</div>
          <div className="section2_plan_title2">Become a Necessity</div>
          <div>
            As a parent want to give the best of everything, especially
            education, education costs continue to rise, it's more important
            than ever to save enough for your child's future studies. here are
            four key steps of education planning that can help you meet your
            child's education expenses & marriage expenses.
          </div>
          <div className="section2_plan_points">
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
            Calculate the expenses
          </div>
          <div className="section2_plan_points">
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
            Choose the right child plan to invest in
          </div>
          <div className="section2_plan_points">
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
            Start investing at the earliest
          </div>
          <div className="section2_plan_points">
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
            Provide a life cover for your child future{" "}
          </div>
          <div className="section2_plan_btns">Calculate</div>
          <div className="section2_plan_desc">Education Fund Calculator</div>
        </div>
      </Container>
    </div>
  );
};
