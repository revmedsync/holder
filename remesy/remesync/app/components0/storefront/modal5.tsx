import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronRight, Code,  Layers, SlidersHorizontal, } from "lucide-react"


interface mobileProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
    hd1: string;
    desc: string;
    sh: string;
    content: string[];
}


export function Modal5({icon:Icon, text, hd1, desc, sh, content}: mobileProps) {
  return (
            <nav>
                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
                    {<Icon/>}
                    <h1 className="text-[#0C0C0C] text-lg">{text}</h1>
                    <ChevronRight className="ml-auto h-5 w-5 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="grid gap-2 py-2">
                    <div className="bg-gray-200 rounded-sm p-2 ">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-[#402E7A]">
                              {hd1}   
                            </h1>
                            <h2 className="text-xs text-stone-700 font-semibold">
                                {desc}
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold text-sm pt-4">{sh}</h2>
                            <nav className="border py-1 border-b-gray-400"></nav>
                            {content.map((item, index) => (
                                <div key={index} className="py-2">
                                    <p className="text-xs text-gray-500 font-semibold hover:text-indigo-900 hover:underline cursor-pointer">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <nav className="border-b border-[#402E7A]"></nav>
            </nav>
  )
}
