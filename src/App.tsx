import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuth } from "./providers/AuthProvider";
import Navbar from "./components/Navbar";
import MathematicsPage from "./pages/MathematicsPage";
import DataSciencePage from "./pages/DataSciencePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <ToastContainer />
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/maths-quiz" element={<MathematicsPage />} />
            <Route path="/data-science-quiz" element={<DataSciencePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
