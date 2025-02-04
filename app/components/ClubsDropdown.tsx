"use client";

import Link from "next/link";
import { clubsList } from "@/lib/mock-data-clubs";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function ClubsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button className="flex items-center gap-2 text-xl font-bold hover:text-cyberGold/90 transition-colors">
        Club Events
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-obsidian/95 backdrop-blur-md rounded-lg shadow-lg py-2 z-50 border border-cyberGold/20">
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
      )}
    </div>
  );
}