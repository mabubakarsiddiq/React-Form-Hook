
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function Form() {
  const {register,formState: { errors },control, reset,handleSubmit, watch,} = useForm({

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (body) => {
    console.log(body, "body");
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const onFormInvalid = () => {
    console.log("invalid");
  };

  // React Form Start
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit, onFormInvalid)}>
        <div className="container flex justify-center items-center mt-5  ">
          <div className=" child w-2/6 h-3/5 bg-slate-500 py-5 ">
            <div className="heading">
              <h1 className="text-4xl font-extrabold text-center text-white">
                The
                <span className="text-yellow-400"> Coding</span> Buzz
              </h1>
              <p className="text-1xl p-3 font-bold text-center text-white">
                Welcome to{" "}
                <span className="text-yellow-400"> The Coding Buzz Form!</span>
              </p>
              <div className="flex justify-around items-center "></div>
            </div>
            <div className=" flex flex-col z-50 bg-transparent  p-5">

    {/* Form Input Start */}

              <div>
                               {/* Input Name */}
                <input
                  className="p-3 my-3 rounded-lg border-none w-full"
                  type="text"
                  placeholder="Enter Your First Name"
                  {...register("firstName", {
                    required: "First Name is Required!",
                    minLength: {
                      value: 3,
                      message: "min length should be 3",
                    },
                  })}
                />
                {errors.firstName && (
                  <div className="error text-yellow-400 font-bold ">
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  className="p-3 my-3 w-full rounded-lg border-none  "
                  type="text"
                  placeholder="Enter Your Last Name"
                  {...register("lastName", {
                    required: "Last Name is Required!",
                    minLength: {
                      value: 3,
                      message: "min length should be 3",
                    },
                  })}
                />
                {errors.lastName && (
                  <div className="error text-yellow-400 font-bold ">
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              <div>
                               {/* Input Email */}
                <input
                  className="p-3 my-3 rounded-lg border-none w-full"
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Please Enter Your Email",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Email is not valid!",
                    },
                  })}
                />
                {errors.email && (
                  <div className="error text-yellow-400 font-bold">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div>
                               {/* Input Password */}
                <input
                  className="p-3 my-3 w-full rounded-lg border-none"
                  type="password"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Please Create Your Password!",
                    minLength: {
                      value: 4,
                      message: "min length should be 4",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{4,8}$/,
                      message:
                        "Password must include uppercase, lowercase, and a number",
                    },
                  })}
                />
                {errors.password && (
                  <div className="error text-yellow-400 font-bold ">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  id="confirmPassword"
                  className="p-3 my-3 w-full rounded-lg border-none"
                  type="password"
                  placeholder="Enter Your Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please Confirm Your Password!",
                    validate: (value, data) => {
                      if (data.password !== value) {
                        return "password is not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <div className="error text-yellow-400 font-bold ">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                id="signUp"
                className="bg-yellow-400 px-32  py-2 rounded-lg font-extrabold"
                type="submit"
              >
                SignUp
              </button>
            </div>
            {/* <div class="flex justify-center items-center mt-4 text-white">
            <p>
              Already have an account?{" "}
              <a href="./index.html" class="text-yellow-400 text-center">
                Login
              </a>
            </p>
          </div> */}
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
