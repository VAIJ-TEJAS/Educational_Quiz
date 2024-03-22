import LoginCard from "../components/LoginCard";
import GoogleSignIn from "../components/GoogleSignIn";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <LoginCard />
        <GoogleSignIn />
    </div>
  );
};

export default LoginPage;
