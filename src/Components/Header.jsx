import React, { useState } from 'react';
import PhoenixLogo from '../assets/logo (1).png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#' },
        { name: 'EVENT', href: '#' },
        { name: 'CONTACT US', href: '#' },
    ];

    return (
        <nav className="bg-[#0a0a0a] text-white px-6 py-6 border-b border-[#D4AF37]/20 sticky top-0 z-[100]">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between md:grid md:grid-cols-3">

                {/* Left Navigation - Increased text size to sm */}
                <ul className="hidden md:flex gap-10 justify-start items-center text-sm font-boldonse tracking-[0.25em]">
                    {navLinks.slice(0, 2).map((link) => (
                        <li key={link.name} className="hover:text-[#D4AF37] transition-all cursor-pointer font-bold">
                            {link.name}
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37]">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Center Branding - Increased to 3xl/4xl and removed shadow */}
                <div className="flex items-center justify-center gap-4">
                    <img
                        src={PhoenixLogo}
                        alt="Logo"
                        className="w-12 h-12 object-contain"
                    />
                    <h1 className="text-3xl md:text-4xl font-boldonse font-bold tracking-tighter">
                        HACK<span className="text-[#D4AF37]">SERIES</span>
                    </h1>
                </div>

                {/* Right Navigation - Increased text size */}
                <div className="hidden md:flex gap-10 justify-end items-center text-sm font-boldonse tracking-[0.25em]">
                    <li className="list-none hover:text-[#D4AF37] transition-all cursor-pointer font-bold">CONTACT US</li>
                    <button className="px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase">
                        REGISTRATION
                    </button>
                </div>


            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/98 z-[99] transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-[#D4AF37] hover:text-white transition-colors z-[100]"
                    aria-label="Close menu"
                >
                    <X size={36} />
                </button>
                <ul className="flex flex-col items-center justify-center h-full gap-12 font-boldonse text-2xl tracking-[0.3em]">
                    {navLinks.map((link) => (
                        <li key={link.name} onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] cursor-pointer">
                            {link.name}
                        </li>
                    ))}
                    <button className="mt-6 px-12 py-4 bg-[#D4AF37] text-black font-bold text-lg">
                        REGISTRATION
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Header;