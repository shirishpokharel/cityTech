"use client";
import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginApiHandler } from "@/apiLayer/Authentication";
import { toast } from "react-toastify";
import { ip_address } from "@/lib";
import Background from "../background/Background";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
  const { replace } = useRouter();
  const [toggle, setToggle] = useState(false);
  const handleToggleEyeIcon = () => {
    setToggle(!toggle);
  };
  const schema = yup
    .object({
      login_id: yup.string().required("Kindly enter your username."),
      login_password: yup.string().required("Kindly enter your password."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const payload = {
      ...data,
      ip_address,
    };
    LoginApiHandler(payload).then((response) => {
      if (response?.status === 200) {
        replace("/dashboard");
        toast.success(response?.data?.data?.[0]?.return_msg);
      } else {
        toast.error(response);
      }
    });
  };

  return (
    <div className="">
      <Background />

      <form
        className="flex flex-col justify-center align-middle gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center fw-bold text-4xl">Login</h2>

        <div>
          <label htmlFor="login_id">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="login_id"
            className="md:w-full"
            {...register("login_id")}
          />
          {errors?.login_id && (
            <span className="text-red-400">{errors?.login_id?.message}</span>
          )}
        </div>

        <div className="relative">
          <label htmlFor="login_password">Password</label>
          <input
            type={toggle ? "text" : "password"}
            placeholder="Password"
            id="login_password"
            className="md:w-full"
            {...register("login_password")}
          />
          <Image
            src={toggle ? "/hide.png" : "/view.png"}
            alt="viewPassword"
            height={20}
            width={20}
            onClick={handleToggleEyeIcon}
            className="absolute top-[3em] right-[1em]  cursor-pointer"
          />
          {errors?.login_password && (
            <span className="text-red-400">
              {errors?.login_password?.message}
            </span>
          )}
        </div>

        <button className="md:w-full text-2xl">Log In</button>
      </form>
    </div>
  );
}

export default Login;
