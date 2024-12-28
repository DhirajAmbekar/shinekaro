import React from "react";
import { Container } from "../components/Container";

export const Section3 = () => {
  return (
    <div className="section3_main">
      <div className="section3_title">
        Why do Planning Today for Your Child's Future?
      </div>
      <Container>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fLCjQJCekTs?si=YrdoxqvAdEUjc-hG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  );
};
