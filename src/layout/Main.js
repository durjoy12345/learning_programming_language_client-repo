import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSide from "../pages/Shared/LeftSide/LeftSide";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Container className="">
        <Row className="w-100">
          <Col className="" md="3">
            <LeftSide></LeftSide>
          </Col>
          <Col md="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
