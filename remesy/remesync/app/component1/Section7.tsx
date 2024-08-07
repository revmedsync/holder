import Link from "next/link"
import { SVGProps } from "react"

export function Section7() {
    return (
      <footer className="py-8 md:py-12 w-full relative mt-[-200px]">
        <div className="absolute inset-0 w-full h-full">
        <div className="relative h-full w-full bg-white">
          </div>
      </div>
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div className="flex flex-col items-start gap-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="w-8 h-8 text-primary" />
              <span className="text-xl font-semibold">Acme Inc.</span>
            </Link>
            <p className="text-muted-foreground">Crafting innovative solutions for the modern web.</p>
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="Twitter" prefetch={false}>
                <TwitterIcon className="w-5 h-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook" prefetch={false}>
                <FacebookIcon className="w-5 h-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn" prefetch={false}>
                <LinkedinIcon className="w-5 h-5 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram" prefetch={false}>
                <InstagramIcon className="w-5 h-5 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Resources</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Tutorials
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            FAQs
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Legal</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Cookie Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Disclaimer
          </Link>
        </div>
        </div>
        <div className="container max-w-7xl mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground relative z-10">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
              Sitemap
            </Link>
          </nav>
        </div>
      </footer>
    )
  }

const FacebookIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}



const InstagramIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


const LinkedinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


const MountainIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


const TwitterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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