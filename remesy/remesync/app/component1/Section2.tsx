import Image from 'next/image';
import React from 'react';
import { SubmitButton } from '../components0/storefront/SubmitButton';

export const Section2: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 bg-[#FEFFD2] flex flex-col md:flex-row">
            
            <div className="w-full flex flex-col py-30 justify-center items-center">
                <div className=' w-full p-8 flex justify-end items-end'>
                    <img 
                        src="/bestseller.png"  // Use absolute path for public folder
                        alt="Example" 
                        
                        className="w-20 h-20" 
                    />
                </div>
                    
                <div className='w-full pl-[120px] flex justify-start items-start'>
                    <img 
                        src="/quote.png"  // Use absolute path for public folder
                        alt="Example" 
                        className="w-20 h-20" 
                    />
                </div>
                <h1 className="text-center text-[#191919] font-CustomGlyseric text-3xl sm:text-4xl md:text-6xl  max-w-md sm:max-w-lg md:max-w-5xl leading-tight">
                    Manage your entire process, from sourcing to employee onboarding and management
                </h1>
                <div className="bg-[#FEFFD2] w-full h-[100px] "></div>
                <div className='pt-10'>
                    <SubmitButton text="Workable RCMS"/>
                </div>
                
                
            </div>
        </div>
    );
};
