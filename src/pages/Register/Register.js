import React, { useContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  const {
    createUserWithEmail,
    updateUserProfile,
    emailVerification,
    setLoading,
  } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURl, email, password);
    createUserWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateUserProfile(name, photoURl);
        form.reset();
        setError(null);
        handleEmailVerification();
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(error, errorMessage);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    emailVerification()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div onSubmit={handleCreateUser} className="container">
        <div className="screen-register">
          <div className="screen__content">
            <form className="login">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <strong className="me-auto">{error}</strong>
                </Toast.Header>
              </Toast>
              <h2 className="fw-bold">Sign up and start learning!!</h2>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  name="name"
                  type="text"
                  className="login__input"
                  placeholder="Please Enter Your Full Name"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  name="photo"
                  type="text"
                  className="login__input"
                  placeholder="Please Enter Photo URL"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  name="email"
                  type="text"
                  className="login__input"
                  placeholder="Please Enter Your Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  name="password"
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button
                onClick={() => setShow(true)}
                className="button login__submit"
              >
                <span className="button__text">Sign Up Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <h3
                style={{ marginTop: "20px", marginLeft: "25px" }}
                className="py-5"
              >
                Already have an account? <Link to="/login">Log In</Link>
              </h3>
            </form>
            <div className="social-login">
              <div className="social-icons">
                <Link
                  href="#"
                  className="social-login__icon fab fa-instagram"
                ></Link>
                <Link
                  href="#"
                  className="social-login__icon fab fa-facebook"
                ></Link>
                <Link
                  href="#"
                  className="social-login__icon fab fa-twitter"
                ></Link>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape5 screen__background__shape4"></span>
            <span className="screen__background__shape5 screen__background__shape3"></span>
            <span className="screen__background__shape5 screen__background__shape2"></span>
            <span className="screen__background__shape5 screen__background__shape6"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
