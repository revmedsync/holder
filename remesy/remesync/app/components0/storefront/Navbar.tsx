"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Modal3 } from "./modal3";
import { SubmitButton } from "./SubmitButton";
import { ChevronRightCircle, Menu, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#402E7A] w-full mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="./rmsdark.svg"
                                alt="rms logo"
                                width={80}
                                height={80}
                                className="text-[#EEEEEE]"
                            />
                        </Link>
                        <Link href="/">
                            <h1 className="text-[#F3FEB8] font-bold font-CustomParisian text-xl sm:text-2xl lg:text-4xl ml-2">
                                RevMedSync
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Modal3 text="Products"/>
                        <SubmitButton text="Pricing" variant="ghost"/>
                        <SubmitButton text="Customers" variant="ghost"/>
                        <Modal3 text="Resources"/>
                        <SubmitButton text="Log in" variant="ghost"/>
                        <SubmitButton text="Request a demo" variant="outline"/>
                        <Button>
                            <h1>Start a Free Trial</h1>
                            <ChevronRightCircle className="w-5 h-5 ml-2"/>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden ">
                        <button onClick={toggleMenu} className="text-white">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Modal3 text="Products"/>
                        <SubmitButton text="Pricing" variant="ghost"/>
                        <SubmitButton text="Customers" variant="ghost"/>
                        <Modal3 text="Resources"/>
                        
                        <div className="p-5">
                            <SubmitButton text="Log in" variant="ghost"/>
                            <SubmitButton text="Request a demo" variant="outline"/>
                            <Button className="w-full justify-between">
                                <h1>Start a Free Trial</h1>
                                <ChevronRightCircle className="w-5 h-5"/>
                            </Button>
                        </div>
                        
                    </div>
                </div>
            )}
        </nav>
    );
}