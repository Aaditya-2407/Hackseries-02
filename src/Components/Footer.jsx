import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AcesLogo from '../assets/logo (1).png';

const Footer = () => {
    const otherLinks = [
        { name: "YouTube", path: "https://www.youtube.com/@ACESDIT" },
        { name: "Blog", path: "https://aces.dypvp.edu.in/blog" },
        { name: "Linktree", path: "https://linktr.ee/acesdit" },
    ];

    const socialLinks = [
        { icon: FaInstagram, href: "https://www.instagram.com/aces.dit/", label: "Instagram" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/company/acesdit/", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/acesdit", label: "GitHub" },
    ];

    return (
        <footer
            className="fixed bottom-0 left-0 w-full min-h-[60vh] md:min-h-[65vh] overflow-hidden text-white flex flex-col justify-between z-0 pointer-events-none"
            style={{ background: "#800000" }}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,0,0,0.7) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full px-6 pt-16 md:pt-12 pb-4 md:px-[6vw] gap-4 md:gap-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
                    <h2 className="text-white/90 text-lg md:text-3xl font-bold tracking-tight leading-tight mb-1 uppercase">
                        Association of Computer <br className="hidden lg:block" /> Engineering Students
                    </h2>
                    <p className="text-white/60 text-[10px] md:text-xs font-medium uppercase tracking-[0.15em]">
                        DIT, Pimpri, Pune
                    </p>
                </div>

                <div className="flex justify-center items-center md:w-1/3">
                    <img
                        src={AcesLogo}
                        alt="ACES Logo"
                        className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
                    />
                </div>

                <div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right md:w-1/3 pointer-events-auto">
                    <nav className="hidden md:flex flex-col gap-3">
                        {otherLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white font-semibold text-lg transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition-all hover:-translate-y-1"
                            >
                                <s.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 overflow-hidden leading-none select-none px-4 pt-4 md:pt-16 pb-4 md:pb-8">
                <p
                    className="font-black text-white whitespace-nowrap uppercase opacity-90 text-center text-[clamp(2.5rem,11vw,8rem)] md:text-[clamp(3.6rem,15vw,18rem)]"
                    style={{ lineHeight: 0.8, letterSpacing: "-0.02em" }}
                >
                    HACKSERIES
                </p>
            </div>

            <div className="relative z-10 mx-auto flex w-full justify-center border-t border-white/10 px-6 py-3 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] text-center lg:px-[6vw]">
                <span>© 2026 ACES DIT. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;