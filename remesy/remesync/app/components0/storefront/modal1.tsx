"useClient";
import { Popover, PopoverTrigger, PopoverContent, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SVGProps } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";



interface buttonProps {
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


export function Modal1({text, variant}: buttonProps) {



    const [isRotated, setIsRotated] = useState(false);
  
    const handleClick = () => {
      setIsRotated(!isRotated);
    };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="px-2 border-2 border-[#EEEEEE] bg-[#402E7F] hover:bg-[#402E7A]" onClick={handleClick}>
          <h1 className="text-[#EEEEEE]">{text}</h1>
          <ChevronDown
        
        className={`w-5 h-5 text-bold text-[#eeeeee] transform transition-transform duration-300 ${
          isRotated ? "rotate-180" : ""
        } cursor-pointer`}
      />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[1350px] rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-lg font-medium">Menu</h3>
          <div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close dropdown</span>
            </Button>
          </div>
        </div>
        <div className="space-y-1 p-4">
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium"
            prefetch={false}
          >
            <span>Home</span>
            <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium "
            prefetch={false}
          >
            <span>About</span>
            <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium "
            prefetch={false}
          >
            <span>Services</span>
            <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium "
            prefetch={false}
          >
            <span>Contact</span>
            <ChevronRightIcon className="h-5 w-5 text-muted-foreground" />
          </Link>
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


const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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