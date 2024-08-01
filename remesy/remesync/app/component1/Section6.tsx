import RCMSPackages from "../components0/RCMSPackages";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Section6 (){
    return(
        <>
        <RCMSPackages/>
        <div className="flex flex-col items-center text-center bg-[#F7F9F2] p-8 z-99">
            <h1 className="text-3xl font-bold mb-4">Let's grow together</h1>
            <p className="mb-6 max-w-md">
                Explore our full platform with a 15-day free trial.
                Post jobs, get candidates and onboard employees all in one place.
            </p>
            <Button className="mb-8">
                <h1 className="text-xl">Get Started</h1>
                <ChevronRight className="ml-2 h-8 w-8" />
            </Button>
            <Image 
                src="/joined.png" 
                alt="People joining together" 
                width={600} 
                height={400} 
                className="w-34 h-34 md:max-w-34 mt-[-40px]"
            />
            
        </div>
        <div className="z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F7F9F2" fill-opacity="1" d="M0,0L60,5.3C120,11,240,21,360,48C480,75,600,117,720,117.3C840,117,960,75,1080,53.3C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        
        </div>
        
        </>
    )
}