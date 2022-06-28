import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.jpg";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger text-center">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/");
  }
  return (
    <div>
      <p className="text-center">or</p>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "80px" }} src={google} alt="" />
          <span className="px-3">Google Sign in</span>
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "80px" }} src={github} alt="" />
          <span className="px-3">Github Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
