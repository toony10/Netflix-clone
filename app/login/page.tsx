"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import useAuth from "@/hooks/userAuth";
interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      // await singIn(email,password)
    } else {
      // await singUp(email,password)
    }
  };
  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="https://rb.gy/p2hphi"
        alt="netflix wallpaper"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        sizes="100vh"
      />
      <Image
        src="/imgs/Netflix_logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sing in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", {
                required: { value: true, message: "this filled is required" },
              })}
            />
            {errors.email && (
              <div className="flex">
                <ExclamationCircleIcon className="h-5 w-5 my-auto space-x-2 text-orange-500" />
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  {errors.email.message}
                </p>
              </div>
            )}
          </label>

          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", {
                required: { value: true, message: "this filled is required" },
              })}
            />
            {errors.password && (
              <div className="flex">
                <ExclamationCircleIcon className="h-5 w-5 my-auto space-x-2 text-orange-500" />
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  {errors.password.message}
                </p>
              </div>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}>
          Sing In
        </button>
        <div className="text-[gray]">
          New To Netflix?{" "}
          <button
            type="submit"
            className="text-white  hover:underline"
            onClick={() => setLogin(false)}>
            Sing up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
