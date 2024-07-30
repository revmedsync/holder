import Image from 'next/image';
import Links1 from './links/Links1';
import Link from 'next/link';
import { AiOutlineInstagram , AiOutlineX   } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { IoChevronBack } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FiShoppingBag } from "react-icons/fi";
import { useState } from 'react';
import { Dropdown } from "./Dropdown"


export default async function Navmain (){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    
    return (
        <nav className="w-full h-24 border-4 border-blk1 bg-wit4 z-50">
            
            <div className="flex justify-between items-center h-full px-4"> {/* Adjusted px-2 here */}
                <Link href="/" passHref>
                    {/* <Image 
                        src="/icons/REVMEDSYNC.png"
                        alt="Logo"
                        width={180}
                        height={75} 
                        className="cursor-pointer object-cover object-center w-full h-80"
                        priority
                    /> */}
                    <div className='flex flex-col'>
                    <div className="flex flex-row ">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22 ">R</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">E</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">V</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y2 underline pl-[5px]">M</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y2 underline">E</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y2 underline">D</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">S</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">Y</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">N</h1>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2 text-y22">C</h1>
    
    </div>
                    </div>
                </Link>
                
                <div className="hidden md:hidden xl:flex">
                    <div className='flex xl:flex-row'>
                        <Links1 />
                    </div>

                    <div className="flex items-center">
                {user ? (
                    <>
                        <Link href="/bag" className="group p-2 flex items-center mr-2">
                            <FiShoppingBag size={30} className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{total}</span>
                        </Link>
                        <Dropdown/>
                    </>
                ) : (
                    <div className="hidden md:flex md:flex-1 md:place-items-center md:justify-end md:space-x-2">
                        <button >
                            <LoginLink>Sign in</LoginLink>
                        </button>
                        <span className="h-6 w-px bg-stone-200"></span>
                        <button >
                            <RegisterLink>Sign up</RegisterLink>
                        </button>
                    </div>
                )}
            </div>
                    
                </div>
                
                <div onClick={handleNav} className="xl:hidden cursor-pointer pl-24 active:scale-95 transition-transform duration-50 ease-in-out text-y22">
                    <RiMenu5Fill size={40}/>
                </div>

            </div>
            
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] xl:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                    <a
                      className="inline-block rounded-full border border-stone-900 bg-stone-900 p-3 text-white hover:bg-transparent hover:text-stone-900 focus:outline-none focus:ring active:text-indigo-500"
                      href="#"
                    >
                      <IoChevronBack size={30}/>
                    </a>
                    </div>
                </div>
                <div className="flex-col py-4 pt-8">
                    <Links1/>
                </div>
                <div className='flex flex-row justify-around pt-10 items-center'>
                    <AiOutlineInstagram size={30}/>
                    <FaLinkedin  size={30}/>
                    <AiOutlineX  size={30}/>
                </div>
            </div>
        </nav>
    );
};

