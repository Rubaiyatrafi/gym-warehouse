import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Social from "./Social/Social";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger text-center">Error: {error?.message}</p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const navigateSignup = (event) => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email");
    }
  };
  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center mt-5">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className="w-50 d-block mx-auto bg-info"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorElement}
      <h5>
        Are you first to this site?{" "}
        <Link
          to="/signup"
          className="text-danger text-decoration-none"
          onClick={navigateSignup}
        >
          Please Signup
        </Link>
      </h5>
      <h5>
        Are you forgot password?
        <button
          className="text-danger text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </h5>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;
