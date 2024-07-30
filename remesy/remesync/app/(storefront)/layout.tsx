import { Navbar1 } from "@/app/components0/storefront/Navbar1";
import { type ReactNode } from "react";

export default function StoreFrontLayout({children}:{children:ReactNode}){
    return(
        <>
            <Navbar1/>
            <main className="">
                {children}
            </main>
            
        </>
    )
}