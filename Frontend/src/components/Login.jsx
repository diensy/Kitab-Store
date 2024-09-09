import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully 🤗");
          document.getElementById("my_modal_2").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
          
        }
        
      })
      .catch((e) => {
        if (e.response) {
          console.error(e);
          toast.error("Error : " + e.response.data.message);
          setTimeout(()=>{},3000)
        }
      });
  };
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box  dark:text-white dark:bg-slate-900 ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              ✕
            </Link>

            <h3 className="font-semibold text-lg hover:underline">Login 🤗</h3>
            <div className="flex flex-col pr-10 pt-10 pb-10 justify-start items-start gap-6 ">
              <span className="text-lg ml-4">
                {" "}
                Email
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="ml-9  border px-1 pr-10 py-2 text-sm rounded  dark:text-white dark:bg-slate-900"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-sm text-center mt-1 text-red-600">
                    This field is required
                  </p>
                )}
              </span>
              <span className="text-lg">
                Password
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="ml-4  px-1 border pr-10 py-2 rounded text-sm dark:text-white dark:bg-slate-900"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password must be 8 charcters",
                    },
                    maxLength: {
                      value: 16,
                      message: "passsword must be 8-16 charcters ",
                    },
                  })}
                />
                {errors.password && (
                  <p className="mt-1 ml-6 text-sm text-red-500 text-center">
                    {errors.password.message}
                  </p>
                )}
              </span>
              <div className="flex justify-between">
                <button className="bg-pink-600 px-3 rounded-lg text-white hover:bg-pink-700 duration-500 ">
                  Login
                </button>
                <p className="ml-32 mt-4 ">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
