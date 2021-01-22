import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Profiles from "./components/Profiles";

const App = () => {
  return (
    <Container className="my-3">
      <h3 className="mb-3">Profiles</h3>
      <Row>
        <Col sm={12} md={6}>
          <Search />
        </Col>
        <Col sm={12} md={6}>
          <Filters />
        </Col>
      </Row>
      <Profiles />
    </Container>
  );
};

export default App;
