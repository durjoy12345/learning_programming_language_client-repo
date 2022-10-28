import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col md={3}>
            <LeftSide></LeftSide>
          </Col>
          <Col md={9}>
            <div className="text-center">
              <h1 className="fw-bold fs-1 my-5">Error 404</h1>
              <h3 className="fw-semibold fs-3 my-5">
                Woops Looks like page doesn't exist
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
