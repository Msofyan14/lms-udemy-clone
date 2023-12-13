import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-x-1">
      <Image width={26} height={26} src="/logo.svg" alt="logo" />
      <h1 className="font-bold uppercase text-2xl text-sky-700 ">yanzedu</h1>
    </div>
  );
};
