import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        id: "01",
        whiteText: "BUILD",
        yellowText: "FOUNDATIONS",
        desc: "Master the core logic of programming languages."
    },
    {
        id: "02",
        whiteText: "HANDS-ON",
        yellowText: "LEARNING",
        desc: "Theory is a ghost without practice. Apply concepts in real-world scenarios."
    },
    {
        id: "03",
        whiteText: "CAREER",
        yellowText: "ORIENTED",
        desc: "Focus on high-demand domains, ensuring you stay updated with latest tools."
    },
    {
        id: "04",
        whiteText: "PEER",
        yellowText: "LEARNING",
        desc: "Collaborative growth in a competitive student-led environment."
    }
];

const Why = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.reason-section');

        // Initially hide all sections except the first one
        gsap.set(sections.slice(1), { opacity: 0, yPercent: 20, scale: 0.95 });

        // Pin the container and scrub through animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${window.innerHeight * 3}`, 
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        // Crossfade and slight parallax up
        sections.forEach((section, index) => {
            if (index > 0) {
                const prev = sections[index - 1];

                // Fade out previous section and move up
                tl.to(prev, {
                    opacity: 0,
                    yPercent: -20,
                    scale: 0.95,
                    duration: 1,
                    ease: "power2.inOut"
                }, `swap${index}`);

                // Fade in current section from below
                tl.to(section, {
                    opacity: 1,
                    yPercent: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.inOut"
                }, `swap${index}`);
            }
        });

    }, { scope: containerRef });

    return (
        <section className="relative bg-[#050505]">
            {/* INTRO HEADER - Fixed Gradient across HACKSERIES */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
                {/* Maroon Radial Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.4)_0%,_transparent_65%)]" />
                <h2 className="text-6xl md:text-[10rem] font-boldonse font-bold tracking-tighter uppercase leading-none">
                    <span className="text-white">Why</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] via-40% to-[#4b1111]">
                        HackSeries?
                    </span>
                </h2>
                <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-[#4b1111] to-transparent mt-12" />
            </div>

            {/* THE REVEAL SEQUENCE (GSAP Pinned) */}
            <div ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden">
                {/* Global Maroon Radial Glow so it doesn't overlap multiple times */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.35)_0%,_transparent_70%)]" />

                {reasons.map((r, i) => (
                    <div 
                        key={r.id} 
                        className={`reason-section absolute inset-0 flex items-center justify-center w-full h-full`}
                        style={{ zIndex: 10 + i }}
                    >
                        {/* HUGE BACKGROUND NUMBER */}
                        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-50">
                            <span className="text-[65vw] font-boldonse font-bold text-[#7a2020] leading-none select-none tracking-tighter">
                                {r.id}
                            </span>
                        </div>

                        <div className="relative z-10 max-w-5xl px-6 md:px-10 text-center">
                            <h3 className="text-[#D4AF37] font-boldonse text-[10px] md:text-sm tracking-[0.5em] mb-4 md:mb-6 uppercase font-bold drop-shadow-lg">
                                Reason {r.id}
                            </h3>
                            <h2 className="text-4xl md:text-[9rem] font-boldonse font-bold text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                                {r.whiteText} <span className="text-[#D4AF37]">{r.yellowText}</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-2xl font-light tracking-widest leading-relaxed max-w-3xl mx-auto uppercase">
                                {r.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Why;