import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { Toast } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError(null);
        form.reset();
        console.log(user);
        if (user.emailVerified) {
          navigate(from, {replace:true});
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div onSubmit={handleLoginWithEmailAndPassword} className="container">
        <div className="screen">
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
              <button onClick={() => setShow(true)} className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <h3 style={{marginTop: '10px', marginLeft: '30px'}} className="py-5">
                Don't have an account? <Link to="/register">Sign up</Link>
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
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
