import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
        <h5 className="text-danger">{props.description}</h5>
      </Container>
    </section>
  );
};

export default CommonSection;
