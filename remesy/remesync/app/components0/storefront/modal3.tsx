"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SVGProps, CSSProperties } from "react";
import { Blocks, BrickWall, ChevronDown, ListCheckIcon, ListTodoIcon, RocketIcon, Wand, Wand2 } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
    text: string;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const headingContent = ["Workable rcms", "Workable Software Development",]
const Content1 = [
    {
        id:0,
        val: "Post jobs everywhere",
    },
    {
        id:1,
        val: "Source passive candidates",
    },
    {
        id:2,
        val: "Build a career's page",
    },
    {
        id:3,
        val: "Recruit in local language",
    },
    {
        id:4,
        val: "Drive referral",
    },
]

const Content2 = [
    {
        id:0,
        val: "2Post jobs everywhere",
    },
    {
        id:1,
        val: "2Source passive candidates",
    },
    {
        id:2,
        val: "2Build a career's page",
    },
    {
        id:3,
        val: "2Recruit in local language",
    },
    {
        id:4,
        val: "2Drive referral",
    },
]

export function Modal3({text, variant}: ButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverContentStyle = {
        '--translate-y': isOpen ? '0' : '100%',
        '--opacity': isOpen ? '1' : '0',
        transform: 'translateY(var(--translate-y))',
        opacity: 'var(--opacity)'
    } as CSSProperties;

    const [currentContent, setCurrentContent] = useState(Content1);
    const [getter, setter] = useState(headingContent[0]);
    const handleMouseEnter = (content:any, headingIndex:number) => {
        setCurrentContent(content);
        setter(headingContent[headingIndex]);
      };
    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button 
                    variant="outline" 
                    className=" px-2 border-2 border-[#EEEEEE] bg-[#402E7F] hover:bg-[#402E7A]"
                >
                    <h1 className="text-[#EEEEEE]">{text}</h1>
                    <ChevronDown
                        className={`w-5 h-5 text-bold text-[#eeeeee] transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        } cursor-pointer`}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent 
                className="bg-[#EEEEEE] md:w-full mt-[7px] shadow-lg transition-all duration-300"
                style={popoverContentStyle}
            >
                <div className="flex flex-col  md:w-full">
                        <div className="flex flex-row gap-4 w-full">
                            <div className="flex flex-col">
                                <div className="flex flex-row bg-gray-300 p-5">
                                    <div className=""
                                    onMouseEnter={() => handleMouseEnter(Content1, 0)}>
                                        <h3 className="text-xl font-bold text-blue-600">Workable RCMS</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem.</p>
                                    </div>
                                    <div className="pt-7">
                                        <ChevronRightIcon className=""/>
                                    </div>
                                    </div>
                                
                                    <div className="flex flex-row p-5">
                                    <div className=""
                                    onMouseEnter={() => handleMouseEnter(Content2, 1)}
                                    >
                                        <h3 className="text-xl font-bold text-blue-600">Workable RCMS</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem.</p>
                                    </div>
                                    <div className="pt-7">
                                        <ChevronRightIcon className=""/>
                                    </div>
                                    </div>
                                
                            </div>
                            <div className="bg-gray-300 p-3 w-3/4">
                                <h4 className="uppercase font-semibold">{getter}</h4>
                                <div className="flex flex-row w-auto gap-2 p-3 justify-evenly">
                                    <div className="flex flex-col">
                                        <h5 className="font-bold">Source & attract</h5>
                                        <div className="border-b border-gray-800 w-[150px] p-1"></div>
                                        <div className="flex flex-col gap-2 pt-2">
                                        {currentContent.map((item) => (
                                            <p key={item.id}>{item.val}</p>
                                        ))}
                                        </div>
                                       
                                    </div>
                                    <div>
                                    <h5 className="font-bold">Source & attract</h5>
                                    <div className="border-b border-gray-800 w-[150px] p-1"></div>
                                        
                                        <div className="flex flex-col gap-2 pt-2">
                                            {currentContent.map((item) => (
                                                <p key={item.id}>{item.val}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                    <h5 className="font-bold">Source & attract</h5>
                                    <div className="border-b border-gray-800 w-[150px] p-1"></div>
                                        
                                        <div className="flex flex-col gap-2 pt-2">
                                            {currentContent.map((item) => (
                                                <p key={item.id}>{item.val}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-evenly pt-20">
                            <div className="flex flex-row">
                                <RocketIcon/>
                                <h2>Product Overview</h2>
                            </div>
                            <div className="border-r border-gray-800 h-[30px] p-1"></div>
                                    
                            <div className="flex flex-row">
                                <ListTodoIcon/>

                                <h2>All Features</h2>
                            </div>

                            <div className="border-r border-gray-800 h-[30px] p-1"></div>
                            
                            <div className="flex flex-row">
                                <Blocks/>

                                <h2>Integrations</h2>
                            </div>

                            <div className="border-r border-gray-800 h-[30px] p-1"></div>
                            
                            <div className="flex flex-row">
                                <Wand2/>

                                <h2>Workable AI</h2>
                            </div>
                        </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

const ChevronRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}

const XIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}