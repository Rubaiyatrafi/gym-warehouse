import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import { async } from "@firebase/util";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    console.log("user", user);
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const agree = event.target.terms.checked;
    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log("Updated profile");
      navigate("/");
    }
  };
  return (
    <div className="signup-form">
      <h1 className="text-center text-primary mt-5 mb-5">Please Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your password"
          required
        />
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Agree Terms and Conditions</label>
        <input
          className="w-50 d-block mx-auto bg-info"
          type="submit"
          value="signup"
        />
      </form>
      <h5>
        Already have an account?
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </h5>
      <Social></Social>
    </div>
  );
};

export default Signup;
