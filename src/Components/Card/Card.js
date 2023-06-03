import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./card-style.module.css";

function cardItem({ image, title }) {
  return (
    <Card className={styles.cardItem}>
      <Card.Img variant="top" src={image} className={styles.cardImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default cardItem;
