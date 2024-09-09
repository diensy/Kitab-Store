import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state ?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      phonenumber: data.phonenumber,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("SignUp Successfully 😊");
          navigate (from,{replace:true})
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((e) => {
        if (e.response) {
          console.error(e);
          toast.error("Error : " + e.response.data.message);
        }
      });
  };
  return (
    <>
      <div
        id="my_modal_3"
        className="flex justify-center items-center h-screen  dark:text-white dark:bg-slate-900"
      >
        <div className="modal-box dark:text-white dark:bg-slate-900">
          <form
            className=" dark:text-white dark:bg-slate-900"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg  dark:text-white dark:bg-slate-900">
              Welcome User 😊
            </h3>
            <div className="flex flex-col gap-1 signUp  dark:text-white dark:bg-slate-900 ">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                placeholder="Enter Your fullname"
                id="name"
                className=" dark:text-white dark:bg-slate-800 "
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <p className="text-red-600 text-sm text-center">
                  This field is required
                </p>
              )}
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                className=" dark:text-white dark:bg-slate-800"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm text-center">
                  This field is required
                </p>
              )}
              <label htmlFor="phone">Phone : </label>
              <input
                type="number"
                placeholder="Enter Your Number"
                id="phone"
                className=" dark:text-white dark:bg-slate-800"
                {...register("phonenumber", { required: { value: true } })}
              />
              {errors.text && (
                <p className="text-red-600 text-sm text-center">
                  This field is required
                </p>
              )}

              <p className="font-semibold">Gender :</p>
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" name="gender" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="female" name="gender" />
              <label htmlFor="others">Other</label>
              <input type="radio" id="others" name="gender" />
              <label htmlFor="pass">Password : </label>
              <input
                type="text"
                placeholder="Enter Your Password"
                id="pass"
                className=" dark:text-white dark:bg-slate-800"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 8,
                    message: "password must be 8 chacter",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-center text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button className="btn mt-2 bg-rose-500 text-white duration-300 hover:bg-rose-400">
                Sign Up
              </button>
              <span className="text-lg">
                alerady have account ?{" "}
                <span
                  className="hover:underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Login
                </span>
                <Login />
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
