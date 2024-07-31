import React from 'react';
import { ChevronRight, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Section4: React.FC = () => {
    return (
        <div className="mt-[-10px] md:mt-[-200px] p-4 sm:p-8 bg-[#D95F59] flex flex-col md:flex-row">
            {/* Image Section - Now on the left */}
            <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                <Image
                    src="./reviewing.svg"
                    alt="reviewing duo tone"
                    width={500}
                    height={500}
                    className="w-full max-w-[300px] md:max-w-[500px]"
                />
            </div>

            {/* Text Content Section - Now on the right */}
            <div className="w-full md:w-1/2 gap-5 md:pl-10 md:mr-20 bg-[#D95F59] pb-5">
                
                <h1 className="text-left text-[#E2E2B6] font-CustomGionatMono text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-6">
                Where great practices hire great people
                </h1>
                <h2 className="text-left text-[#E2DFD0] font-normal text-lg sm:text-xl mt-10">
                Since 2012, the USA's best practices have depended on RevMedSYnc to find and hire the people they depend on.
                </h2>
                <div className="flex flex-col space-y-8 mt-8 md:mt-16 bg-[#FEFFD2] p-5 rounded-xl">
    {[
        { icon: "/satisfaction2.png", number: "98%", text: "Client Satisfaction" },
        { icon: "/bargraph.png", number: "30%", text: "Average Revenue Increase" },
        { icon: "/punctuality2.png", number: "40", text: "Hours Saved Monthly" }
    ].map((item, index) => (
        <div key={index} className="flex items-center space-x-6 bg-[]">
            <div className="w-20 h-20 flex-shrink-0">
                <img 
                    src={item.icon}
                    alt={item.text}
                    className="w-full h-full object-contain" 
                />
            </div>
            <div className='flex flex-col'>
                <h2 className="font-bold text-4xl md:text-5xl text-[#D95F59]">
                    {item.number}
                </h2> 
                <h3 className="font-bold text-sm md:text-base text-[#D95F59] mt-1">
                    {item.text}
                </h3> 
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
};