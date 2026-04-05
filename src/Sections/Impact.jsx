import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Share2 } from 'lucide-react';

const Impact = () => {
    const canvasRef = useRef(null);

    // Your Particle Logic (Kept exactly as you had it)
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const numberOfParticles = 250;
        let animationFrameId;

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.radius = Math.random() * 4 + 0.5;
                this.speedY = Math.random() * 0.8 + 0.4;
                this.opacity = Math.random() * 0.6 + 0.3;
                this.wobble = Math.random() * 0.02 + 0.01;
                this.wobbleAngle = Math.random() * Math.PI * 2;
                const colors = ['#4b1111', '#800000', '#FF0000', '#FF3131'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                this.y -= this.speedY;
                this.wobbleAngle += this.wobble;
                this.x += Math.sin(this.wobbleAngle) * 0.6;
                if (this.y < -20) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = this.radius * 3;
                ctx.fill();
                ctx.closePath();
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < numberOfParticles; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const particle of particles) {
                particle.update();
                particle.draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();
        window.addEventListener('resize', init);
        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Impacts Data
    const impacts = [
        {
            title: "Technical Proficiency",
            desc: "Master high-stakes internships and hackathons through architecturally sound coding practices.",
            icon: <Terminal className="w-8 h-8 text-[#D4AF37]" />
        },
        {
            title: "Problem-Solving",
            desc: "Architect creative, efficient solutions that push the boundaries of standard logic.",
            icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
        },
        {
            title: "Networking",
            desc: "Connect with elite peers and industry mentors to forge professional career paths.",
            icon: <Share2 className="w-8 h-8 text-[#D4AF37]" />
        }
    ];

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#050505] min-h-screen">
            {/* 1. Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none opacity-80"
            />

            {/* 2. Gradient Overlay for Stacking Depth */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-7xl font-boldonse font-bold text-white uppercase tracking-tighter leading-tight">
                        How Hack<span className="text-[#D4AF37]">Series</span> <br /> Helps Students
                    </h2>
                </div>

                {/* 3. The Cards (Glassmorphism + Higher Z-Index) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20">
                    {impacts.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="p-10 bg-white/[0.04] backdrop-blur-[15px] border border-white/10 rounded-[2.5rem] 
                                       flex flex-col items-center text-center group transition-all duration-500 shadow-2xl shadow-black/50"
                        >
                            {/* Icon Container */}
                            <div className="mb-10 p-5 bg-black/60 rounded-3xl border border-white/5 
                                            group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-boldonse font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                {item.desc}
                            </p>

                            {/* Floating Gold Bar */}
                            <div className="mt-8 w-12 h-[1px] bg-[#D4AF37] opacity-30 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;