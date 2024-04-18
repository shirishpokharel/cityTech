import Image from "next/image";
import React from "react";

function NavigationMenu() {
  // 4464d7
  return (
    <div className=" hidden w-[15rem] bg-white md:flex felx-col h-100 rounded-2xl py-[20px] px-[10px] my-3 mb-0 ">
      <div className="flex flex-col flex-1 gap-[20px] justify-center align-middle">
        <Image
          src="/citytech-logo.webp"
          width={100}
          height={100}
          alt="cityTechLogo"
          className="bg-white text-center p-2 mx-auto rounded-2xl"
        />

        <ul className="flex flex-1 gap-3 flex-col">
          <li className="p-2 lg:p-3 text-white  bg-gradient-to-br from-[#2F53D8] to-[#0a1d64] rounded-2xl cursor-pointer   text-sm flex gap-2 hover:scale-[1.03]">
            <div className=" hidden md:block">
              <i className="fas fa-receipt"></i>
            </div>
            <span className="">Transaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationMenu;
