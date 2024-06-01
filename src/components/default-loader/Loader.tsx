import React from "react";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";

export default function Loader() {
  return (
    <div className="flex self-center h-screen w-full">
      <BiLoaderCircle className="text-3xl" />
    </div>
  );
}
