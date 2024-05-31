import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobilenav from "./Mobilenavbar";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Yoom Logo"
          className="max-sm:size-10"
        ></Image>
        <p className="hidden text-xl text-white font-semibold sm:block">Yoom</p>
      </Link>

      <div className="flex justify-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
        <Mobilenav />
      </div>
    </nav>
  );
}
