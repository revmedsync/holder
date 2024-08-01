"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { SubmitButton } from "./SubmitButton";
import { ChevronRightCircle, Instagram, Layers, Linkedin, Menu, X } from "lucide-react";
import { Modal3 } from "./modal3";
import { Button } from "@/components/ui/button";
import { Modal5 } from "./modal5";

const Content1 = [
  { id: 0, val: "Post jobs everywhere" },
  { id: 1, val: "Source passive candidates" },
  { id: 2, val: "Build a career's page" },
  { id: 3, val: "Recruit in local language" },
  { id: 4, val: "Drive referral" },
];

export function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const contentValues = Content1.map((item) => item.val);

  return (
    <header className="flex sticky top-0 items-center justify-between h-16 px-4 md:px-6 bg-[#402E7A] border-b z-50">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <Image
          src="./rmsdark.svg"
          alt="rms logo"
          width={80}
          height={80}
          className="p-2"
        />
        <h1 className="text-[#F3FEB8] font-bold md:font-CustomParisian text-2xl lg:text-2xl ml-16 absolute">
          RevMedSync
        </h1>
      </Link>
      <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
        <Modal3 text="Products" />
        <SubmitButton text="Pricing" variant="ghost" />
        <SubmitButton text="Customers" variant="ghost" />
        <Modal3 text="Resources" />
        <SubmitButton text="Log in" variant="ghost" />
        <SubmitButton text="Request a demo" variant="outline" />
        <Button>
          <h1>Start a Free Trial</h1>
          <ChevronRightCircle className="w-5 h-5 ml-2" />
        </Button>
      </nav>

      <div className="sm:hidden flex items-center">
        <div onClick={handleNav} className="cursor-pointer pl-4 active:scale-95 transition-transform duration-50 ease-in-out">
          <Menu className="w-10 h-10 text-[#EEEEEE]" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-1/2 h-screen p-4 bg-[#F7F9F2] transition-transform duration-500 sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <X size={50} className="cursor-pointer text-[#402E7A]" onClick={handleNav}/>
        </div>
        <div className="flex-col py-4">
          <Modal5 
            icon={Layers} 
            text="Products" 
            hd1="Revmedsync RCMS" 
            desc="optimizing medical billing and credentialing" 
            sh="Source & attract" 
            content={contentValues}
          />
          <Modal5 
            icon={Layers} 
            text="Products" 
            hd1="Revmedsync RCMS" 
            desc="optimizing medical billing and credentialing" 
            sh="Source & attract" 
            content={contentValues}
          />
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Instagram size={30} />
          <Linkedin size={30} />
        </div>
      </div>
    </header>
  );
}