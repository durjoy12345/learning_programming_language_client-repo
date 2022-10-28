import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="">
            <div className="hero-image">
              <div className="hero-text">
                <h1 className="fw-bold" style={{fontSize: '50px'}}>Discover your journey</h1>
                <h3 className="fw-bolder">Discover 25+ Courses from top Instructors Around the World</h3>
                <p className="fw-semibold">Take your learning organization to the next level. to the next level. Who'll share their knowledge to people around the world.</p>
                <Link to='/courses'><Button>View All Course</Button></Link>
              </div>
            </div>

            <div className="mt-5 ms-2">
            <h1 className="text-center my-2 fw-bold">Why Students Choose Us for Gain Their Knowledge..</h1>
            <p className="mt-4 fw-bolder">
            Helping employees gain skills and providing career development often take a back seat to business priorities but workplace better right now. Seventy percent of workers think that.
            </p>
              <div className="fw-semibold text-center mt-5">
              <p className="ms-3"><FaBook></FaBook> Free for physically handcraft</p>
            <p className="ms-3"><FaBook></FaBook> Easy to enroll courses</p>
            <p className="ms-3"><FaBook></FaBook> Course certificate for particular course</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
