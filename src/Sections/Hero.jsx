import React from 'react';
import { motion } from 'framer-motion';
import PhoenixLogo from '../assets/phoenix-vector.svg';
import DarkVeil from '../Components/DarkVeil'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen w-full bg-[#060010] flex items-center justify-center overflow-hidden">
            <div className="absolute -inset-10 md:-inset-20 z-0 scale-105">
                <DarkVeil
                    hueShift={233}
                    noiseIntensity={0}
                    scanlineIntensity={0.2}
                    speed={1}
                    scanlineFrequency={0.5}
                    warpAmount={0.5}
                />
            </div>
            <div className="container mx-auto px-6 mt-12 md:mt-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: { duration: 2 },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-full lg:w-1/2 flex justify-start lg:justify-start"
                >
                    <img
                        src={PhoenixLogo}
                        alt="Phoenix"
                        className="w-64 h-64 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] object-contain brightness-150 contrast-125 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                    />

                    <motion.div
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full -z-10"
                    />
                </motion.div>

                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[8rem] font-boldonse font-bold text-white leading-none tracking-tighter"
                    >
                        HACK<span className="text-[#D4AF37]">SERIES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-gray-300 mt-6 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl leading-relaxed"
                    >
                        <strong>HackSeries</strong> is a technical event hosted by ACES, featuring interactive sessions that guide students from basic to intermediate levels in various domains. It focuses on practical, hands-on learning in programming, web development, and more, promoting problem-solving skills through real-world applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-20"
                    >
                        <a href="https://aces-hackseries.vercel.app/docs/Job%20Description.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 md:px-12 py-4 bg-[#D4AF37] text-black font-boldonse font-bold tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300 text-center flex items-center justify-center text-sm md:text-base"
                        >
                            Resources
                        </a>
                        <button className="px-8 md:px-12 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-boldonse font-bold tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300 text-sm md:text-base">
                            LEARN MORE
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
        </section>
    );
};

export default Hero;