import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [AuthUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...AuthUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully 👋");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
   
    } catch (error) {
      toast.error("Error : " + error.message);
      setTimeout(()=>{},2000)
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="text-white bg-rose-700 px-3 py-2 border-none rounded-md cursor-pointer hover:bg-rose-500 duration-300"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
