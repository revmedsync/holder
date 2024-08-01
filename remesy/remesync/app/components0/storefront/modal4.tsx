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

const headingContent = ["Revmedsync rcms", "Revmedsync Software Development",]
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
type content = { id: string; val: string }[];
type HeadingContent = string[];

export function Modal4({ text, variant }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverContentStyle = {
    '--translate-y': isOpen ? '0' : '100%',
    '--opacity': isOpen ? '1' : '0',
    transform: 'translateY(var(--translate-y))',
    opacity: 'var(--opacity)',
  } as React.CSSProperties;

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
          className="px-2 border-2 border-gray-200 bg-purple-800 hover:bg-purple-700"
        >
          <h1 className="text-gray-200">{text}</h1>
          <ChevronDown
            className={`w-5 h-5 text-bold text-gray-200 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            } cursor-pointer`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="bg-gray-200 w-full max-w-6xl mt-4 shadow-lg transition-all duration-300 p-4"
        style={popoverContentStyle}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col md:w-1/4">
              <div className="flex flex-row bg-gray-300 rounded-sm p-5">
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(Content1, 0)}
                >
                  <h3 className="text-xl font-bold text-blue-600">Revmedsync RCMS</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem.</p>
                </div>
                <div className="pt-7">
                  <ChevronRightIcon />
                </div>
              </div>
              <div className="flex flex-row bg-gray-300 rounded-sm p-5 mt-4">
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(Content2, 1)}
                >
                  <h3 className="text-xl font-bold text-blue-600">Revmedsync RCMS</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem.</p>
                </div>
                <div className="pt-7">
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
            <div className="bg-gray-300 rounded-sm p-3 w-full md:w-3/4">
              <h4 className="uppercase font-semibold">{getter}</h4>
              <div className="flex flex-col sm:flex-row w-full gap-2 p-3 justify-evenly">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h5 className="font-bold">Source & attract</h5>
                    <div className="border-b border-gray-800 w-full sm:w-36 p-1"></div>
                    <div className="flex flex-col gap-2 pt-2">
                      {currentContent.map((item) => (
                        <p key={item.id}>{item.val}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-evenly pt-10 md:pt-20">
            <div className="flex flex-row items-center mb-4 md:mb-0">
              <RocketIcon className="w-6 h-6 mr-2" />
              <h2>Product Overview</h2>
            </div>
            <div className="hidden md:block border-r border-gray-800 h-8 mx-4"></div>
            <div className="flex flex-row items-center mb-4 md:mb-0">
              <ListTodoIcon className="w-6 h-6 mr-2" />
              <h2>All Features</h2>
            </div>
            <div className="hidden md:block border-r border-gray-800 h-8 mx-4"></div>
            <div className="flex flex-row items-center mb-4 md:mb-0">
              <Blocks className="w-6 h-6 mr-2" />
              <h2>Integrations</h2>
            </div>
            <div className="hidden md:block border-r border-gray-800 h-8 mx-4"></div>
            <div className="flex flex-row items-center">
              <Wand2 className="w-6 h-6 mr-2" />
              <h2>Revmedsync AI</h2>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
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