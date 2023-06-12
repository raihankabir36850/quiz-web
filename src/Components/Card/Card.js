import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./card-style.module.css";

function cardItem({ image, title, path }) {
  const [show, setShow] = useState(false);

  const mouseOverHandler = () => {
    setShow(true);
  };

  const mouseEnterHandler = () => {
    setShow(false);
  };

  return (
    <Card
      className={styles.cardItem}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseEnterHandler}
    >
      <Card.Img variant="top" src={image} className={styles.cardImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <div
        className={styles.cardOverlay}
        style={
          show === true
            ? { opacity: 1, transition: "opacity 0.2s ease-in-out" }
            : { opacity: 0, transition: "opacity 0.2s ease-in-out" }
        }
      >
        <Link to={path} className={styles.cardOverlayLink}>
          View More
        </Link>
      </div>
    </Card>
  );
}

export default cardItem;
