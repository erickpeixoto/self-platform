"use client";
import React from "react";

export default function Page() {
  return (
    <div className="items-center justify-center mt-5 md:h-screen md:flex md:flex-row bg-slate-800">
      <div className="items-center justify-center w-full h-screen md:flex">
        {/* Create an area to two divs side by sede */}
        <div className="items-center justify-center w-full md:h-full md:flex bg-violet-500">
          One
        </div>
        <div className="items-center justify-center w-full bg-purple-800 md:h-full md:flex">
          Two
        </div>
      </div>
    </div>
  );
}
