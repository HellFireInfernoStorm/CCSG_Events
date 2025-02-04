import Image from "next/image";
import Link from "next/link";
import ClubsDropdown from "./ClubsDropdown";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-obsidian via-steelBlue/90 to-cyberGold/80 text-white shadow-lg border-b border-cyberGold/40">
      <div className="flex items-center">
        <Image
          src="/ccsg.png"
          alt="Placeholder Logo"
          width={50}
          height={50}
        />
      </div>

      <nav className="flex gap-10 items-center">
        <Link 
          href="/unplugged" 
          className="text-xl font-bold hover:text-cyberGold/90 transition-colors"
        >
          Unplugged 2025
        </Link>
        
        <ClubsDropdown />
      </nav>

      <div className="flex items-center">
        <Image
          src="/ccsg.png"
          alt="Authentication Placeholder"
          width={42}
          height={42}
          className="rounded-full border-2 border-cyberGold shadow-lg"
        />
      </div>
    </header>
  );
}