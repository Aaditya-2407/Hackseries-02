import React, { useState } from 'react';
import PhoenixLogo from '../assets/logo (1).png';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe1ebYzaaolZlJPmLYB99PmG3A-y4iHHrR_5YSehi_8hEV3BQ/viewform?usp=header';

    const goToHomeHero = (e) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/#home');
            return;
        }

        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            window.history.replaceState(null, '', '/#home');
        }
    };

    const navLinks = [
        { name: 'HOME', href: '/#home' },
        // { name: 'EVENT', href: '/#event' }, // Hidden for now
        { name: 'GALLERY', href: '/gallery' },
        { name: 'CONTACT US', href: '/contact' },
    ];

    return (
        <>
            <div className="fixed top-4 w-full z-100 px-4 md:px-8 flex justify-center pointer-events-none">
                <nav className="pointer-events-auto w-full max-w-350 bg-[#0a0a0a]/80 backdrop-blur-md text-white px-6 py-3 border border-[#D4AF37]/30 rounded-2xl md:rounded-full transition-all">
                    <div className="flex items-center justify-between">

                        <a href="/#home" onClick={goToHomeHero} className="flex items-center gap-3 cursor-pointer" aria-label="Go to home section">
                            <img
                                src={PhoenixLogo}
                                alt="Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <h1 className="text-2xl md:text-3xl font-boldonse font-bold tracking-tighter">
                                HACK<span className="text-[#D4AF37]">SERIES</span>
                            </h1>
                        </a>

                        <ul className="hidden lg:flex flex-1 justify-end mr-10 gap-8 xl:gap-12 items-center text-sm lg:text-base font-boldonse tracking-[0.2em] whitespace-nowrap">
                            {navLinks.map((link) => (
                                <li key={link.name} className="hover:text-[#D4AF37] transition-all cursor-pointer font-bold">
                                    {link.href.startsWith('/#') ? (
                                        <a href={link.href} className="block">{link.name}</a>
                                    ) : (
                                        <Link to={link.href} className="block">{link.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="hidden lg:flex items-center justify-end">
                            <a href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase rounded-full whitespace-nowrap block text-center">
                                REGISTER NOW
                            </a>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37] hover:text-white transition-colors">
                                <Menu size={28} />
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/98 z-101 transition-transform duration-500 lg:hidden pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-8 text-[#D4AF37] hover:text-white transition-colors z-102"
                    aria-label="Close menu"
                >
                    <X size={36} />
                </button>
                <div className="flex flex-col items-center justify-center h-full gap-12 font-boldonse text-2xl tracking-[0.3em]">
                    {navLinks.map((link) => (
                        <div key={link.name} onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] cursor-pointer">
                            {link.href.startsWith('/#') ? (
                                <a href={link.href} className="block">{link.name}</a>
                            ) : (
                                <Link to={link.href} className="block">{link.name}</Link>
                            )}
                        </div>
                    ))}
                    <a href={registrationFormUrl} onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer" className="mt-6 px-10 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full block text-center">
                        REGISTER NOW
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;