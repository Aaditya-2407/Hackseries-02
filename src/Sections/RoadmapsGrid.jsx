import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Code,
    BrainCircuit,
    Terminal,
    Layers,
    GitPullRequestArrow,
    Cloudy
} from "lucide-react";

/* ArrowUpRight, */

import webImage from "../assets/web.png";
import aiImage from "../assets/ai.png";
import cloudImage from "../assets/cloud.png";
import pythonImage from "../assets/python.png";
import graphImage from "../assets/graph.png";
import gitImage from "../assets/git.png";

const roadmaps = [
    {
        title: "Web Development",
        link: "/roadmaps/webdev",
        icon: <Code className="size-10" />,
        description: "Master Modern Frontend and Backend technologies.",
        image: webImage
    },
    {
        title: "AI & ML",
        link: "/roadmaps/aiml",
        icon: <BrainCircuit className="size-10" />,
        description: "Dive into Intelligence, Data Science and Neural Networks.",
        image: aiImage
    },
    {
        title: "Cloud Computing",
        link: "/roadmaps/cloud",
        icon: <Cloudy className="size-10" />,
        description: "Scale applications globally using AWS, Azure and GCP.",
        image: cloudImage
    },
    {
        title: "Programming Language",
        link: "/roadmaps/programming",
        icon: <Terminal className="size-10" />,
        description: "Core concepts of C++, Java and Python for efficiency.",
        image: pythonImage
    },
    {
        title: "Data Structure & Algorithms",
        link: "/roadmaps/dsa",
        icon: <Layers className="size-10" />,
        description: "Optimize your code with advanced DSA techniques.",
        image: graphImage
    },
    {
        title: "Git & Github",
        link: "./docs/git-cheat-sheet-education.pdf",
        target: "_blank",
        icon: <GitPullRequestArrow className="size-10" />,
        description: "Essential version control and collaboration skills.",
        image: gitImage
    },
];

const RoadmapGrid = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemAnim = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative px-6 md:px-20 py-24 bg-[#010101] overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#D4AF37] font-boldonse text-xs tracking-[0.4em] uppercase mb-4 block">
                        Learning Paths
                    </span>
                    <h2 className="text-4xl md:text-6xl text-white font-boldonse font-bold tracking-tight">
                        Curated <span className="text-[#D4AF37]">Roadmaps</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6" />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >

                    {roadmaps.map((item, index) => {
                        const isExternal = item.target === "_blank";
                        const CardWrapper = isExternal ? "a" : Link;
                        const extraProps = isExternal ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : { to: item.link };

                        return (
                            <motion.div key={index} variants={itemAnim}>
                                <CardWrapper
                                    {...extraProps}
                                    className="relative group block h-60 p-8 bg-[#0a0a0a] border-white/10 hover:border hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden"
                                >

                                    <div className="absolute top-0 right-0">
                                        <img src={item.image} alt={item.title} className="w-40 invert" />
                                    </div>

                                    <div className="relative z-10 h-full flex flex-col">

                                        <h3 className="absolute bottom-0 left-0 text-2xl font-boldonse font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                            {item.title}
                                        </h3>

                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 text-[#D4AF37]">
                                                {item.icon}
                                            </div>
                                            {/* <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" /> */}
                                        </div>

                                        {/* <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                                            {item.description}
                                        </p> */}

                                        {/* <div className="mt-8 flex items-center text-gray-400 group-hover:text-[#D4AF37] text-xs font-bold tracking-widest uppercase transition-all duration-300">
                                            Explore Path
                                            <div className="ml-2 w-8 h-px bg-gray-400 group-hover:bg-[#D4AF37]" />
                                        </div> */}
                                    </div>

                                    {/* Corner Accent */}
                                    {/* <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 blur-2xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-[#D4AF37]/20 transition-all" /> */}
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default RoadmapGrid;
