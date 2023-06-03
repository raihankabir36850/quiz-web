import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./home-style.module.css";
import Cards from "../../Cards/Cards";

function Home() {
  return (
    <Container className="main-layout">
      <h2 className={styles.titleHeader}>Please Select a topic.</h2>
      <Cards />
    </Container>
  );
}

export default Home;
