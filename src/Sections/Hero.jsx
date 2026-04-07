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
            <div className="absolute inset-0 bg-black/45 lg:bg-transparent z-5 pointer-events-none" />
            <div className="container mx-auto px-2 sm:px-4 lg:px-8 xl:px-10 mt-12 md:mt-20 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-8 lg:gap-16 xl:gap-20 min-h-[80vh]">

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[120%] flex justify-center -z-10 pointer-events-none lg:relative lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:w-[40%] lg:justify-start lg:ml-auto lg:z-auto lg:pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            opacity: { duration: 2 },
                            scale: { duration: 2, ease: "easeOut" }
                        }}
                        className="relative w-full flex justify-center lg:justify-end lg:translate-x-4 xl:translate-x-8"
                    >
                        <img
                            src={PhoenixLogo}
                            alt="Phoenix"
                            className="w-lg h-128 sm:w-160 sm:h-160 md:w-3xl md:h-192 lg:w-lg lg:h-128 xl:w-xl xl:h-144 object-contain brightness-90 lg:brightness-150 contrast-125 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] max-w-none lg:max-w-full opacity-40 lg:opacity-100"
                        />

                        <motion.div
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full -z-10"
                        />
                    </motion.div>
                </div>

                <div className="w-full lg:w-[46%] flex flex-col items-start text-left z-20 px-2 sm:px-4 -mt-8 sm:-mt-4 lg:mt-0 lg:pl-4 xl:pl-6 lg:pr-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase text-white leading-none tracking-tight w-full -mt-6 sm:-mt-4 md:mt-0 mb-6 sm:mb-8 drop-shadow-[0_0_18px_rgba(0,0,0,0.55)]"
                        style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
                    >
                        HACK<span className="text-[#D4AF37]">SERIES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-gray-300 mt-0 md:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-xl lg:max-w-2xl leading-relaxed"
                    >
                        <strong>HackSeries</strong> is a technical event hosted by ACES, featuring interactive sessions that guide students from basic to intermediate levels in various domains. It focuses on practical, hands-on learning in programming, web development, and more, promoting problem-solving skills through real-world applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="mt-14 md:mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-20"
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

            <div className="hidden md:block absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent z-5" />
        </section>
    );
};

export default Hero;