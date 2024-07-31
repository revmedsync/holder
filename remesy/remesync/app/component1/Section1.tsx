import React from 'react';
import { ChevronRight, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Section1: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 bg-[#402E7A] flex flex-col md:flex-row">
            {/* Image Section - Now first on mobile */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last mb-8 md:mb-0">
                <Image
                    src="./ec-analyzing-market-price.svg"
                    alt="rms logo"
                    width={500}
                    height={500}
                    className="w-full max-w-[300px] md:max-w-[500px]"
                />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2 gap-5 order-last md:order-first md:pl-10">
                <div className="flex flex-row pt-8 md:pt-24 justify-start">
                    <h2 className="uppercase font-bold text-sm sm:text-lg text-gray-200">
                        RCMS
                    </h2> 
                    <div className="border-r-2 border-gray-200 h-[20px] sm:h-[30px] mx-2"></div>
                    <h1 className="uppercase font-bold text-sm sm:text-lg text-gray-200">
                        SOFTWARE
                    </h1>
                </div>
                <h1 className="text-left text-gray-200 font-CustomGionatMono text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-6">
                    Smart Solutions for Complex Healthcare Needs
                </h1>
                <h2 className="text-left text-gray-200 font-normal text-lg sm:text-xl mt-4">
                    Efficiently recruit, onboard, and manage top medical billing talent.
                </h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mt-8 md:mt-16 space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                        <PlayIcon className="hidden md:block w-8 h-8 rounded-full bg-stone-200 text-gray-600"/> 
                        <h2 className="uppercase hidden md:block  font-bold text-xs sm:text-sm text-gray-200 ml-2">
                            SEE REVMEDSYNC IN ACTION
                        </h2> 
                    </div>
                    <h2 className="text-sm hidden md:block  text-gray-200">or</h2>
                    <Button variant="outline" className="w-full sm:w-auto hover:bg-[#4F1787]">
                        <p className="text-gray-200 text-lg sm:text-xl">Start a free trial</p>
                        <ChevronRight className="w-5 h-5 text-bold text-gray-200 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};