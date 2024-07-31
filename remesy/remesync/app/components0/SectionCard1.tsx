"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps1 {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export function SectionCard1({ title, subtitle, description, details, image }: ServiceCardProps1) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FEFFD2] flex flex-col max-w-sm overflow-hidden rounded-lg shadow-md">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          className='transform translate-y-0'
        />
      </div>
      <div className="pt-5 pb-6 flex flex-col">
        <h2 className="text-lg font-bold text-[#A0937D] mb-2 uppercase text-center">{title}</h2>
        <h3 className="text-2xl font-bold text-[#1A3636] mb-3 text-center">{subtitle}</h3>
        <p className="text-sm font-semibold text-[#677D6A] text-center tracking-wider mb-6">{description}</p>
        
        <div className="border-t border-[#E0E0E0] pt-4">
          <Button 
            variant="ghost" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex justify-between items-center bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#2E236C] rounded-md py-3 px-4 transition-colors duration-200"
          >
            <span className='font-semibold'>Services Details</span>
            {isExpanded ? 
              <ChevronUp className="w-5 h-5 text-[#2E236C]" /> : 
              <ChevronDown className="w-5 h-5 text-[#2E236C]" />
            }
          </Button>
          
          {isExpanded && (
            <div className="mt-4 bg-white rounded-md shadow-inner p-4">
              <ul className="space-y-2 text-sm text-[#4A4A4A]">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#2E236C] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}