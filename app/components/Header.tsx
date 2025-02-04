import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      {/* Placeholder Logo */}
      <div className="flex items-center">
        <Image
          src="/ccsg.png"
          alt="Placeholder Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Center Text */}
      <h1 className="text-xl font-bold text-center">
        Unplugged 2025 and Club Events
      </h1>

      {/* Placeholder for Authentication */}
      <div className="flex items-center">
        <Image
          src="/ccsg.png"
          alt="Authentication Placeholder"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
}