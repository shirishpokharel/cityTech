"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logOutHandler } from "@/apiLayer/Authentication";
import { cn } from "@/lib/utils";
function TitleBar() {
  const [toggle, setToggle] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  console.log(toggle, "Toggle");

  return (
    <div className="flex flex-1 justify-between  align-middle mt-3 relative">
      <div
        className="md:hidden block p-2"
        onClick={() => {
          setToggle(false);

          setToggleHamburger(!toggleHamburger);
        }}
      >
        <i class="fa-solid fa-bars text-white fa-2xl"></i>
      </div>
      <div
        className={cn(
          !toggleHamburger && "hidden ",
          "w-full  absolute bg-white z-[999999] top-[4em]"
        )}
        style={{
          height: "calc(100vh - 100px)",
        }}
      >
        <div className="text-right ">
          <i
            class="fa-solid fa-xmark fa-xl mr-2"
            onClick={() => {
              setToggle(false);

              setToggleHamburger(false);
            }}
          ></i>
        </div>

        <div className="flex flex-col flex-1 gap-[20px] justify-center align-middle p-5">
          <Image
            src="/citytech-logo.webp"
            width={100}
            height={100}
            alt="cityTechLogo"
            className="bg-white text-center p-2 mx-auto rounded-2xl"
          />

          <ul className="flex flex-1 gap-3 flex-col">
            <li className="p-3 text-white  bg-gradient-to-br from-[#2F53D8] to-[#0a1d64] rounded-2xl cursor-pointer text-sm flex flex-wrap gap-2 hover:scale-[1.03]">
              <div>
                <i className="fas fa-receipt"></i>
              </div>
              <span>Transaction</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block text-white p-2">Welcome to City Tech</div>
      <div className="p-2 pr-4  rounded-3xl bg-white shadow-md  md:w-[220px] ">
        <div className="flex flex-1 justify-center  align-middle md:gap-4 gap-2">
          <Image
            src="/profile.png"
            width={25}
            height={25}
            alt="profile_image"
            className="cursor-pointer"
            onClick={() => {
              setToggleHamburger(false);
              setToggle(!toggle);
            }}
          />
          <div className="font-bold">Shirish Pokhrel</div>
        </div>

        <div
          className={`${
            !toggle && "hidden "
          } absolute top-[3em] bg-white h-[120px] w-[200px] shadow-3xl  border-2 right-[1rem] rounded-2xl text-sm translate-x-100 z-[99999]`}
        >
          <div className="p-2">
            <ul className="flex flex-col gap-1">
              <li className="hover:bg-gradient-to-br from-[#2F53D8] to-[#0a1d64] hover:text-white cursor-pointer p-3 rounded-2xl">
                Profile
              </li>
              <li
                className="hover:bg-gradient-to-br from-[#2F53D8] to-[#0a1d64] hover:text-white cursor-pointer p-3 rounded-2xl"
                onClick={() => {
                  logOutHandler();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
