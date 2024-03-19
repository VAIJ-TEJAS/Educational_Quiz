import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <div className="shadow-sm p-2 flex items-center justify-between">

      {location.pathname !== "/" ? (
        <button onClick={() => navigate(-1)} className="border rounded-md p-2 hover:bg-slate-200">
          <IoMdArrowRoundBack className="text-2xl" />
        </button>
      ) : (
        <span></span>
      )}

      <button
        onClick={() => signOut(auth)}
        className="bg-gray-800 text-sm hover:bg-gray-950 text-white shadow-sm px-5 py-[10px] rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
