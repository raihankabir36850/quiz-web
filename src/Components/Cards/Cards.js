import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import topics from "../../Asset/Data/Topics";
import Card from "../Card/Card";
import styles from "./cards-style.module.css";

function Cards() {
  return (
    <Row xs={1} md={2} className={`g-4 ${styles.cardContainer}`}>
      {topics.map(({ id, image, title }) => {
        return (
          <Col key={id}>
            <Card id={id} image={image} title={title} />
          </Col>
        );
      })}
    </Row>
  );
}

export default Cards;
