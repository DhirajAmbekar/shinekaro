import React from "react";
import { Container } from "../components/Container";
import Director from "../assets/cover_pic1.png";

export const Section6 = () => {
  return (
    <div className="section6_main">
      <div className="section6_title">Meet the Expert</div>
      <Container>
        <div className="section6_detail">
          <div className="section6_detail_ctr">
            <span>Mr. Aaditya Shirke</span> is an IT Engineer with 15 years on
            experience in IT industry in Development & Training, CEO of ISHINE
            DIGITAL PVT LTD Company. With the background of IT field he knows
            the path & hurdles to implement online setup of business with
            websites, social media channels & customer targeting with nurturing
            to them. Agent 2.O is his current mission & he decided to make a
            minimum of 1000 digital advisors who start their online insurance
            business setup with automation, be part of it to make your business
            grow 2X. Aaditya sir has taken Digital Marketing Courses, WhatsApp &
            Facebook Mastry Courses, Insurance Concept Mastry, 10 Effective Ways
            of Prospecting etc. Follow him on Facebook, YouTube & Instagram for
            insurance industry online business related knowledge.
          </div>
          <div className="section6_detail_ctr2">
            <img alt="imgfail" src={Director} />
            <div className="section6_detail_ctr2_n_p">
              Mr. Aaditya Shirke <br></br> Director, Trainer & Coach
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
