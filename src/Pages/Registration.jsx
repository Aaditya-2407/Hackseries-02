import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, GraduationCap, Calendar, Users, Trophy, FileText } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Registration = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        event: '',
        team: '',
        teamDetails: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add form submission logic here
    };

    const showTeamSection = formData.event.includes('hackathon');

    return (
        <div className="relative w-full bg-black overflow-x-hidden text-white">
            <Header />

            <main className="relative z-10 w-full bg-[#050505] min-h-screen shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
                <div className="pt-32 pb-20 px-4 md:px-6 max-w-[900px] mx-auto w-full relative">

                    {/* Background glow effects */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10">
                        {/* Header Section */}
                        <div className="flex items-center mb-10 gap-6">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 group text-[#D4AF37] hover:text-white transition-all duration-300"
                                aria-label="Go back to Home"
                            >
                                <div className="p-3 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all">
                                    <ArrowLeft size={24} />
                                </div>
                            </button>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                                    EVENT <span className="text-[#D4AF37]">REGISTRATION</span>
                                </h1>
                                <p className="text-gray-400 font-light tracking-wide text-sm md:text-base">
                                    Secure your spot in the HackSeries.
                                </p>
                            </div>
                        </div>

                        {/* Registration Form */}
                        <form onSubmit={handleSubmit} className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                
                                {/* Personal Info */}
                                <div className="flex flex-col gap-6">
                                    <h2 className="text-[#D4AF37] text-lg font-bold tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2">Personal Details</h2>
                                    
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Academic & Event Info */}
                                <div className="flex flex-col gap-6">
                                    <h2 className="text-[#D4AF37] text-lg font-bold tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2">Academic & Event</h2>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <Trophy size={18} />
                                        </div>
                                        <select
                                            name="event"
                                            value={formData.event}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-[#222] text-gray-300 text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none appearance-none"
                                            required
                                        >
                                            <option value="" disabled>Select Event Type</option>
                                            <option value="workshop">Workshop</option>
                                            <option value="hackathon">Hackathon</option>
                                            <option value="workshop + hackathon">Workshop + Hackathon</option>
                                        </select>
                                    </div>
                                    
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <GraduationCap size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleChange}
                                            placeholder="College/University Name"
                                            className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                            <Calendar size={18} />
                                        </div>
                                        <select
                                            name="year"
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-[#222] text-gray-300 text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none appearance-none"
                                            required
                                        >
                                            <option value="" disabled>Select Year of Study</option>
                                            <option value="1">First Year</option>
                                            <option value="2">Second Year</option>
                                            <option value="3">Third Year</option>
                                            <option value="4">Fourth Year</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    

                                </div>
                                
                            </div>

                            {/* Conditional Team Details Section */}
                            {showTeamSection && (
                                <div className="mb-8 flex flex-col gap-6 animate-[fadeIn_0.5s_ease-out]">
                                    <h2 className="text-[#D4AF37] text-lg font-bold tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2">Team Details</h2>
                                    
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                                <Users size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                name="team"
                                                value={formData.team}
                                                onChange={handleChange}
                                                placeholder="Team Name"
                                                className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none"
                                                required={showTeamSection}
                                            />
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute top-4 left-0 flex items-start pl-4 pointer-events-none text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                                                <FileText size={18} />
                                            </div>
                                            <textarea
                                                name="teamDetails"
                                                value={formData.teamDetails}
                                                onChange={handleChange}
                                                placeholder="Team Members Details (Names, Emails, Roles)"
                                                rows="4"
                                                className="w-full bg-black/50 border border-[#222] text-white text-sm rounded-xl focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] block pl-12 p-3.5 transition-all outline-none resize-none"
                                                required={showTeamSection}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="mt-8 pt-6 border-t border-[#D4AF37]/10 flex justify-center">
                                <button 
                                    type="submit" 
                                    className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-bold text-black bg-[#D4AF37] rounded-full group transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                >
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-56 opacity-10"></span>
                                    <span className="relative text-lg tracking-[0.2em] uppercase">Complete Registration</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* <Footer />   */}
        </div>
    );
};

export default Registration;
