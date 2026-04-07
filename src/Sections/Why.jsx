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
    const sectionsRef = useRef([]);

    useGSAP(() => {
        const sections = sectionsRef.current;
        if (!sections || sections.length === 0) return;

        gsap.set(sections, {
            autoAlpha: (i) => i === 0 ? 1 : 0,
            yPercent: (i) => i === 0 ? 0 : 20,
            scale: (i) => i === 0 ? 1 : 0.95
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * (ScrollTrigger.isTouch ? 2.2 : 3)}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        sections.forEach((section, index) => {
            if (index > 0) {
                const prev = sections[index - 1];

                tl.to(prev, {
                    autoAlpha: 0,
                    yPercent: -20,
                    scale: 0.95,
                    duration: 1,
                    ease: "power2.inOut"
                }, `swap${index}`);

                tl.to(section, {
                    autoAlpha: 1,
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
            <div className="hidden md:flex relative min-h-[60vh] py-20 flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.4)_0%,_transparent_65%)]" />
                <h2 className="text-6xl md:text-[10rem] font-boldonse font-bold tracking-tighter uppercase leading-none">
                    <span className="text-white">Why</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] via-40% to-[#4b1111] pl-4 pr-4 py-2">
                        HackSeries&nbsp;?
                    </span>
                </h2>
                <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-[#4b1111] to-transparent mt-12" />
            </div>

            <div ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col pt-[100px] md:pt-0">
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(75,17,17,0.35)_0%,_transparent_70%)]" />

                <div className="flex md:hidden relative z-30 flex-col items-center justify-center text-center px-6 pointer-events-none drop-shadow-xl">
                    <h2 className="text-[2.6rem] font-boldonse font-bold tracking-tighter uppercase leading-none drop-shadow-2xl">
                        <span className="text-white">Why</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#802222] pl-4 pr-4 py-2">
                            HackSeries&nbsp;?
                        </span>
                    </h2>
                    <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#4b1111] to-transparent mt-5 mb-2" />
                </div>

                <div className="relative flex-1 w-full pb-[80px] md:pb-0 overflow-hidden">
                    {reasons.map((r, i) => (
                        <div
                            key={r.id}
                            ref={(el) => (sectionsRef.current[i] = el)}
                            className={`reason-section absolute inset-0 flex items-center justify-center w-full h-full`}
                            style={{
                                zIndex: 10 + i,
                                opacity: i === 0 ? 1 : 0,
                                visibility: i === 0 ? 'visible' : 'hidden'
                            }}
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
            </div>
        </section>
    );
};

export default Why;