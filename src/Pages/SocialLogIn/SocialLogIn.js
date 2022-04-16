import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../Images/google.png';
import githubLogo from '../../Images/github.png';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

function SocialLogIn() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  let errorElement = '';

  if (googleError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}
        </p>
      </div>
    );
  }

  if (googleLoading || githubLoading) {
    return <p>Loading...</p>;
  }
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      {errorElement}
      <div className="d-flex align-items-center justify-content-center">
        <hr className="text-primary w-50" />
        <p className="m-4">or</p>
        <hr className="text-primary w-50" />
      </div>
      <div className="d-flex">
        <Button
          variant="info"
          className="w-50 mx-auto"
          onClick={() => signInWithGoogle()}
        >
          <span className="text-white">Log In with </span>{' '}
          <img src={googleLogo} alt="" />
        </Button>
        <Button
          variant="secondary"
          className="w-50 mx-2"
          onClick={() => signInWithGithub()}
        >
          <span>Log In with </span> <img src={githubLogo} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default SocialLogIn;
