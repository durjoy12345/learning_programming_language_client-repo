import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../../../asset/logo.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import ThemeSetUp from "../../../others/ThemeSetUp/ThemeSetUp";

const Header = () => {
  const { user, logOut, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        console.error(error);
      });

  }


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Images}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <small>learning-programming language</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="ms-1" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="ms-1" href="/courses">
                Courses
              </Nav.Link>
              <Nav.Link className="ms-1" href="/error">
                4O4 Page
              </Nav.Link>
              <Nav.Link className="ms-1 me-2" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="ms-1 me-1" href="/pdf">
                pdf
              </Nav.Link>
              <ThemeSetUp></ThemeSetUp>
              <Nav.Link className="ms-2" href="/login">
                {user?.photoURL ? (
                  <>
                    <span
                      variant="light"
                      className="fw-semibold mx-2"
                      onClick={handleLogOut}
                    >
                      LogOut
                    </span>
                    <Image
                      roundedCircle
                      style={{ height: "30px" }}
                      src={user?.photoURL}
                    ></Image>
                  </>
                ) : (
                  <>
                    <FaUser></FaUser>
                    <span className="ms-1">Log In</span>
                  </>
                )}
              </Nav.Link>
              <Nav.Link className="me-1" href="">
                <span onClick={handleGoogleSignIn} className="ms-1">GoogleSignIn</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
