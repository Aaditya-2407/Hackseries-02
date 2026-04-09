import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PhoenixLogo from '../assets/phoenix-vector.svg';
import DarkVeil from '../Components/DarkVeil';
import FloatingLines from '../Components/FloatingLines';
import ModelViewer from '../Components/ModelViewer';
import phoenixModel from '../assets/phoenix.glb';

const Hero = () => {
    const registrationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe1ebYzaaolZlJPmLYB99PmG3A-y4iHHrR_5YSehi_8hEV3BQ/viewform?usp=header';
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const phoenixBoxSize = {
        width: 'clamp(18rem, 38vw, 34rem)',
        height: 'clamp(18rem, 38vw, 34rem)'
    };

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024);
        setMounted(true);
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="home" className="relative min-h-screen w-full bg-[#060010] flex items-center justify-center overflow-hidden">
            {!mounted ? null : isDesktop ? (
                <div className="absolute inset-0 z-0 opacity-50">
                    <FloatingLines
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={3}
                        lineDistance={6}
                        bendRadius={3}
                        bendStrength={-0.3}
                        interactive={true}
                        parallax={true}
                        linesGradient={['#fff2c2', '#d4af37', '#9d751f']}
                        mixBlendMode="screen"
                    />
                </div>
            ) : (
                <>
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
                </>
            )}

            <div className="container mx-auto px-2 sm:px-4 lg:px-8 xl:px-10 mt-12 md:mt-20 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-8 lg:gap-16 xl:gap-20 min-h-[80vh]">

                {!mounted ? null : isDesktop ? (
                    <div className="w-full lg:w-[46%] flex justify-center lg:justify-end pointer-events-none lg:pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                opacity: { duration: 2 },
                                scale: { duration: 2, ease: "easeOut" }
                            }}
                            className="relative flex items-center justify-center opacity-40 lg:opacity-100"
                            style={phoenixBoxSize}
                        >
                            <ModelViewer
                                url={phoenixModel}
                                width="100%"
                                height="100%"
                                defaultRotationX={0}
                                defaultRotationY={90}
                                defaultZoom={0.16}
                                minZoomDistance={0.16}
                                maxZoomDistance={0.16}
                                cameraFov={45}
                                modelXOffset={0}
                                modelYOffset={0}
                                enableHoverRotation={false}
                                enableManualRotation={true}
                                autoRotate={false}
                                environmentPreset="studio"
                                ambientIntensity={0.3}
                                keyLightIntensity={0.8}
                                fillLightIntensity={0.2}
                                rimLightIntensity={1.5}
                                shadowOpacity={0.5}
                            />
                            {/* Subtle gold glow behind the model */}
                            <motion.div
                                animate={{ opacity: [0.2, 0.45, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-[#E7C159]/30 blur-3xl rounded-full -z-10 pointer-events-none scale-110"
                            />
                        </motion.div>
                    </div>
                ) : (
                    <div className="w-full lg:w-[46%] flex justify-center lg:justify-end pointer-events-none lg:pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                opacity: { duration: 2 },
                                scale: { duration: 2, ease: "easeOut" }
                            }}
                            className="relative flex items-center justify-center opacity-40 lg:opacity-100"
                            style={phoenixBoxSize}
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
                )}

                <div className="w-full lg:w-[46%] flex flex-col items-start text-left z-20 px-2 sm:px-4 -mt-8 sm:-mt-4 lg:mt-0 lg:pl-4 xl:pl-6 lg:pr-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className={isDesktop
                            ? "text-6xl sm:text-7xl md:text-8xl font-black uppercase text-white leading-none tracking-tight w-full mb-6 drop-shadow-[0_0_18px_rgba(0,0,0,0.55)]"
                            : "text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase text-white leading-none tracking-tight w-full -mt-6 sm:-mt-4 md:mt-0 mb-6 sm:mb-8 drop-shadow-[0_0_18px_rgba(0,0,0,0.55)]"}
                        style={isDesktop ? { fontSize: 'clamp(3.5rem, 8vw, 7rem)' } : { fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
                    >
                        HACK<span className={isDesktop ? "text-[#E7C159]" : "text-[#D4AF37]"}>SERIES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className={isDesktop
                            ? "text-gray-300 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed"
                            : "text-gray-300 mt-0 md:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-xl lg:max-w-2xl leading-relaxed"}
                    >
                        {isDesktop
                            ? "HackSeries is a technical event hosted by ACES, featuring interactive sessions that guide students from basic to intermediate levels in various domains. It focuses on practical, hands-on learning in programming, web development, and more, promoting problem-solving skills through real-world applications."
                            : <span><strong>HackSeries</strong> is a technical event hosted by ACES, featuring interactive sessions that guide students from basic to intermediate levels in various domains. It focuses on practical, hands-on learning in programming, web development, and more, promoting problem-solving skills through real-world applications.</span>}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="mt-14 md:mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto z-20"
                    >
                        <a href={registrationFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 md:px-12 py-4 bg-[#D4AF37] text-black font-boldonse font-bold tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300 text-center flex items-center justify-center text-sm md:text-base"
                        >
                            Register Now
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