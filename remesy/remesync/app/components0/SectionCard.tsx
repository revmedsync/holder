import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  learnMoreLink: string;
  image: string;
}

export function SectionCard({ title, subtitle, description, learnMoreLink, image }: ServiceCardProps) {
  return (
    <div className="bg-[#FEFFD2] flex flex-col h-full max-w-sm overflow-hidden rounded-lg shadow-md ">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          className='transform translate-y-0'
        />
      </div>
      <div className="px-6 pt-5 pb-6 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-[#A0937D] mb-2 uppercase text-center">{title}</h2>
        <h3 className="text-2xl font-bold text-[#1A3636] mb-3 text-center">{subtitle}</h3>
        <p className="text-sm font-semibold text-[#677D6A] flex-grow text-center tracking-wider">{description}</p>
        <div className="flex justify-center items-center">
          
          <Button variant="ghost">
            <div className='flex flex-row justify-center items-center'>
              <h1 className='p-2 text-xl text-[#2E236C]'>Learn more </h1>
              <ChevronRight className='w-5 h-5 ml-2 text-[#2E236C]'/>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}