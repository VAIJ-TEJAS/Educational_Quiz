import SignUpCard from "../components/SignUpCard";
import GoogleSignIn from "../components/GoogleSignIn";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignUpCard />
      <GoogleSignIn />
    </div>
  );
};

export default SignupPage;
