import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import SignUpCard from "../components/SignUpCard";
import { useState } from "react";
import LoginCard from "../components/LoginCard";

const OnboardingPage = () => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showLogin ? (
        <LoginCard setShowLogin={setShowLogin} />
      ) : (
        <SignUpCard setShowLogin={setShowLogin} />
      )}

      <div className="flex items-center space-x-5 p-8">
        <span className="w-28 border-b-2"></span>
        <span>OR</span>
        <span className="w-28 border-b-2"></span>
      </div>
      <button
        onClick={signIn}
        className="bg-gray-800 flex items-center space-x-5 hover:bg-gray-950 text-white shadow-sm px-7 py-4 rounded-md"
      >
        <img src="glogo.png" className="rounded-full w-6" alt="" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default OnboardingPage;
