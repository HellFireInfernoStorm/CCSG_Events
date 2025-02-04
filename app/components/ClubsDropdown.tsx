"use client"

import Link from "next/link";
import { clubsList } from "@/lib/mock-data-clubs";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ClubsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mouseover', handleClickOutside);
    return () => document.removeEventListener('mouseover', handleClickOutside);
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
    >
      <button 
        className="flex items-center gap-2 text-xl font-bold hover:text-cyberGold/90 transition-colors"
      >
        Club Events
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`absolute ${isOpen ? 'block' : 'hidden'} top-full mt-2 w-48 bg-obsidian/95 backdrop-blur-sm rounded-lg shadow-lg py-2 z-50 border border-cyberGold/20`}>
        {clubsList.map((club) => (
          <Link
            key={club.id}
            href={club.link}
            className="block px-4 py-2 text-white hover:bg-steelBlue/20 hover:text-cyberGold/90 transition-colors"
          >
            {club.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
